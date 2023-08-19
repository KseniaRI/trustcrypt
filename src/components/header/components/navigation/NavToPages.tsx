import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../hooks/use-auth';
import { IoIosLogOut } from 'react-icons/io';
import { removeUser } from '../../../../redux/userSlice';
import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { clearFavorites } from '../../../../redux/favoritesSlice';


enum PathToPage {
    "HOME" = "/",
    "NEWS" = "/news",
    "PRODUCTS" = "/products",
    "FAVORITES" = "/favorites",
};

enum Page {
    "HOME" = "HOME",
    "NEWS" = "NEWS",
    "PRODUCTS" = "PRODUCTS",
    "FAVORITES" = "FAVORITES",
};

enum PageTraduction {
    "HOME" = "Главная",
    "NEWS" = "Новости",
    "PRODUCTS" = "Продукты",
    "FAVORITES" = "Избранные",
};
    

const NavToPages = () => {
    const pages: Page[] = Object.values(Page);
    const { isAuth } = useAuth();
    const dispatch = useAppDispatch();
    
    const navItems = pages.map(page => {
        const path = PathToPage[page];
        const pageName = PageTraduction[page];

        return (
            <li key={path} className="navItem">
                <NavLink to={path}>
                    {pageName}
                </NavLink>
            </li>
        )
    });

    const authNavItem = isAuth  ?
        <IoIosLogOut size={30} onClick={() => {
            dispatch(removeUser());
            dispatch(clearFavorites());
            localStorage.setItem("userId", "");
        }} /> :
        <NavLink to={"/login"}>Войти</NavLink>;

    return (
        <ul className="nav">
            {navItems}
            <li className="navItem">{authNavItem}</li>
        </ul>
    )
}

export default NavToPages;