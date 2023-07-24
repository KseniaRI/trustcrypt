import { useSelector } from 'react-redux';
import Container from "../../components/container/Container"
import { getFavorites } from "../../redux/favoritesSlice"
import ProductsGrid from "../productsPage/components/productsGrid/ProductsGrid";
import './Favorites.scss';

const FavoritesPage = () => {
    const favorites = useSelector(getFavorites);

    const content = favorites.length > 0 ?
        <ProductsGrid gridItems={favorites} /> :
        <p>Вы ещё не добавили ни одного продукта</p>
    
    return (
        <div className='favorites'>
            <Container>
                <h3 className='favorites__title'>Понравившиеся продукты:</h3>
                {content}
            </Container>
        </div>
    )
}

export default FavoritesPage;