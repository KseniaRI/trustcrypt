import Container from "../components/Container"

import ProductsGrid from "../components/ProductsGrid";
import { getFavoritesFromStorage } from '../utils/storageFavorites';

const FavoritesPage = () => {
    const favorites = getFavoritesFromStorage();

    const content = favorites.length > 0 ?
        <ProductsGrid gridItems={favorites} /> :
        <p>Вы ещё не добавили ни одного продукта</p>
    
    return (
        <div className='favorites'>
            <Container>
                <h3 className='favoritesTitle'>Понравившиеся продукты:</h3>
                {content}
            </Container>
        </div>
    )
}

export default FavoritesPage;