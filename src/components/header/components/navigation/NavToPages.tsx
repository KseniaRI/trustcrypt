import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../../../hooks/use-auth';
import { IoIosLogOut } from 'react-icons/io';
import { removeUser } from '../../../../redux/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { clearFavorites } from '../../../../redux/favorites/favoritesSlice';
import { Status } from '../../../../types';


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
    // const { isAuth } = useAuth();
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.user);
    
    const pages: Page[] = Object.values(Page);

    const onLogoutClick = () => {
        dispatch(removeUser());
        dispatch(clearFavorites());
        localStorage.setItem("userId", "");
    };

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

    const authNavItem = status === Status.RESOLVED  ?
        <IoIosLogOut size={30} onClick={() => onLogoutClick()} /> :
        <NavLink to={"/login"}>Войти</NavLink>;

    return (
        <ul className="nav">
            {navItems}
            <li className="navItem">{authNavItem}</li>
        </ul>
    )
}

export default NavToPages;