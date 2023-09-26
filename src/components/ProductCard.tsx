import { useState, useEffect} from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { prodImages } from '../assets/images/pictures';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { IProduct } from '../types';
import { Popover, Skeleton } from 'antd';
import { addFavoriteToFirebase, deleteFavoriteFromFirebase } from '../redux/favorites/favoritesOperations';

interface ProductCardProps {
    product: IProduct;
}

type TProdImages = typeof prodImages;

const ProductCard = ({ product }: ProductCardProps) => {
    const {id: userId } = useAppSelector(state => state.user.userData);

    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.products.favorites);
    
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