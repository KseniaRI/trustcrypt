import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite, getFavorites } from '../redux/favoritesSlice';
import { IProduct } from '../types';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

interface ProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { path, name, description } = product;
    const imgSrc = require(`../assets/images/pictures/${path}.jpg`);

    const dispatch = useDispatch();

    const favoritesIds = useSelector(getFavorites).map(favorite=>favorite.id);
    const productIsFavorite = favoritesIds.includes(product.id);

    const addToFavorites = (product: IProduct) => {
        productIsFavorite ?
            dispatch(deleteFavorite(product.id)) :
            dispatch(addFavorite(product));
    }

    const favoriteIcon = productIsFavorite ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />;

    return (
        <div className="productCard">
            <div className='productCardImgWrap'>
                <img className='productCardImg' src={imgSrc} alt={name} />
                <span
                    className='productCardFavorite'
                    onClick={()=>addToFavorites(product)}
                >
                    {favoriteIcon}
                </span>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard;