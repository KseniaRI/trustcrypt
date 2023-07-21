import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';

enum PathToPage {
    "HOME" = "/",
    "NEWS" = "/news",
    "PRODUCTS" = "/products"
};

enum Page {
    "HOME" = "HOME",
    "NEWS" = "NEWS",
    "PRODUCTS" = "PRODUCTS"
};

enum PageTraduction {
    "HOME" = "Главная",
    "NEWS" = "Новости",
    "PRODUCTS" = "Продукты"
};
    

const Nav = () => {
    const location = useLocation();
    const pages: Page[] = [Page.HOME, Page.NEWS, Page.PRODUCTS];

    const getCurrentClass = (path: PathToPage) => {
        return location.pathname === path ? 'nav__item--current' : '';
    };

    const listOfPages = pages.map(page => {
        const path = PathToPage[page];
        const currentClass = getCurrentClass(path);
        const pageName = PageTraduction[page];

        return (
            <li key={path} className={`nav__item ${currentClass}`}>
                <NavLink to={path}>
                    {pageName}
                </NavLink>
            </li>
        )
    });

    return (
        <ul className="nav">
            {listOfPages}
        </ul>
    )
}

export default Nav;