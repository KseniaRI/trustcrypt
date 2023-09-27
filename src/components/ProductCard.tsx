import { useState, useEffect} from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { Popover, Skeleton } from 'antd';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { addFavoriteToFirebase, deleteFavoriteFromFirebase } from '../redux/favorites/favoritesOperations';
import { getUserData } from '../redux/user/userSelectors';
import { getFavorites } from '../redux/favorites/favoritesSelectors';
import { IProduct } from '../types';
import { prodImages } from '../assets/images/pictures';

interface ProductCardProps {
    product: IProduct;
}

type TProdImages = typeof prodImages;

const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(getFavorites);
    const { id: userId } = useAppSelector(getUserData);
    
    const { path, name, description } = product;
    const imgName: keyof TProdImages = path;
    const imgSrc = prodImages[imgName];

    const initialIsFavorite = favorites.some(fav => fav.id === product.id);

    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

    useEffect(() => {
        setIsFavorite(initialIsFavorite);
    }, [initialIsFavorite])

    const togglePreferenceIcon = () => {
        setIsFavorite(prev => !prev);
    };

    const onPreferenceIconClick = (product: IProduct) => {
        const { id: productId } = product;
        if (!userId) {
            alert("Авторизуйтесь, чтобы добавить продукт в избранное");
            return null;
        }

        if (userId) {
            if (isFavorite) {
                dispatch(deleteFavoriteFromFirebase({ userId, productId }));
            } else {
                dispatch(addFavoriteToFirebase({ userId, product }));
            }
            togglePreferenceIcon();
        } 
    }

    const preferenceIcon = (isFavorite && userId) ?
        <FcLike size={24} /> :
        <FcLikePlaceholder size={24} />;

    const image = imgSrc ?
        <img className='productCardImg' src={imgSrc} alt={name} /> :
        <Skeleton.Image active={!imgSrc} />;
    
    const popoverContent = isFavorite ? 'Удалить из избранных' : 'Добавить в избранное';
    
    return (

        <div className="productCard">
            <div className='productCardImgWrap'>
                {image}
                <Popover content={popoverContent}>
                    <span
                        className='productCardFavorite'
                        onClick={()=>onPreferenceIconClick(product)}
                    >
                        {preferenceIcon} 
                    </span>
                </Popover>
            </div>
            <h3 className='productCardName'>{name}</h3>
            <p className='productCardDescription'>{description}</p>
        </div>
    )
}

export default ProductCard;