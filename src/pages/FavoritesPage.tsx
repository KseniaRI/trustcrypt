import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import Container from "../components/Container"
import ProductsGrid from "../components/ProductsGrid";
import { Status } from "../types";
import { Spin } from "antd";

const FavoritesPage = () => {
    const { id: userId } = useAppSelector(state => state.user.userData);
    const {favorites, status} = useAppSelector(state => state.products);
    

    const authContent = favorites.length > 0 ?
        <ProductsGrid gridItems={favorites} /> :
        <p className="favoritesTxt">Вы ещё не добавили ни одного продукта</p>;
    
    const notAuthContent = <>
        <p className="favoritesTxt">Для того, чтобы получитьдоступ к избранным продуктам необходимо авторизоваться</p>
        <NavLink to={"/login"}>
            <button className="favoritesButton">Вход</button>
        </NavLink>
    </>;

    const content = userId ? authContent : notAuthContent;

    return (
        <div className='favorites'>
            <Container>
                <h3 className='favoritesTitle'>Понравившиеся продукты:</h3>
                { status === Status.LOADING && <Spin size="large" style={{color: "white", marginLeft: '50%'}}/>}
                {content}
            </Container>
        </div>
    )
}

export default FavoritesPage;