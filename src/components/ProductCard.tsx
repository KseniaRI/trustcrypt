import { IProduct } from '../types';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { prodImages } from '../assets/images/pictures';
import { useState } from 'react';
import { addFavoriteToStorage, checkIsProductInStorage, deleteFavoriteFromStorage } from '../utils/storageFavorites';

interface ProductCardProps {
    product: IProduct;
}

type TProdImages = typeof prodImages;

const ProductCard = ({ product }: ProductCardProps) => {
    const { path, name, description } = product;
    const imgName: keyof TProdImages = path;
    const imgSrc = prodImages[imgName];

    const initialIsFavorite = checkIsProductInStorage(product.id);

    const [isFavoriteIcon, setIsFavoriteIcon] = useState(initialIsFavorite);

    const togglePreferenceIcon = () => {
        setIsFavoriteIcon(prev => !prev);
    };

    const onPreferenceIconClick = (product: IProduct) => {
        checkIsProductInStorage(product.id) ?
            deleteFavoriteFromStorage(product.id) :
            addFavoriteToStorage(product);
            
        togglePreferenceIcon();
    }

    const preferenceIcon = isFavoriteIcon ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />;

    return (
        <div className="productCard">
            <div className='productCardImgWrap'>
                <img className='productCardImg' src={imgSrc} alt={name} />
                <span
                    className='productCardFavorite'
                    onClick={()=>onPreferenceIconClick(product)}
                >
                   {preferenceIcon} 
                </span>
            </div>
            <h3 className='productCardName'>{name}</h3>
            <p className='productCardDescription'>{description}</p>
        </div>
    )
}

export default ProductCard;