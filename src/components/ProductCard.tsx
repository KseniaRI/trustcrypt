import { IProduct } from '../types';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { prodImages } from '../assets/images/pictures';
import { useState } from 'react'
import { useAuth } from '../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { addFavorite, deleteFavorite } from '../redux/favoritesSlice';
import { addToFirebaseFavorites, removeFromFirebaseFavorites } from '../services/firebase/firebaseFavoritesOperations';

interface ProductCardProps {
    product: IProduct;
}

type TProdImages = typeof prodImages;

const ProductCard = ({ product }: ProductCardProps) => {
    const { isAuth, id: userId } = useAuth();

    const dispatch = useAppDispatch();
    const userFavorites = useAppSelector(state => state.products.favorites);
    
    const { path, name, description } = product;
    const imgName: keyof TProdImages = path;
    const imgSrc = prodImages[imgName];

    const initialIsFavorite = userFavorites.some(fav => fav.id === product.id);

    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

    const togglePreferenceIcon = () => {
        setIsFavorite(prev => !prev);
    };

    const onPreferenceIconClick = (product: IProduct) => {
        if (!isAuth) {
            alert("Авторизуйтесь, чтобы добавить продукт в избранное");
            return null;
        } else if (userId) {
            if (isFavorite) {
                dispatch(deleteFavorite(product.id));
                removeFromFirebaseFavorites(userId, product.id);
            } else {
                dispatch(addFavorite(product));
                addToFirebaseFavorites(userId, product);
            }
            togglePreferenceIcon();
        }
        
    }

    const preferenceIcon = isFavorite ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />;

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