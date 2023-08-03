import { NavLink, useLocation } from 'react-router-dom';

enum PathToPage {
    "HOME" = "/",
    "NEWS" = "/news",
    "PRODUCTS" = "/products",
    "FAVORITES" = "/favorites"
};

enum Page {
    "HOME" = "HOME",
    "NEWS" = "NEWS",
    "PRODUCTS" = "PRODUCTS",
    "FAVORITES" = "FAVORITES"
};

enum PageTraduction {
    "HOME" = "Главная",
    "NEWS" = "Новости",
    "PRODUCTS" = "Продукты",
    "FAVORITES" = "Избранные"
};
    

const NavToPages = () => {
    const location = useLocation();
    const pages: Page[] = [Page.HOME, Page.NEWS, Page.PRODUCTS, Page.FAVORITES];

    const getCurrentClass = (path: PathToPage) => {
        return location.pathname === path ? 'nav__item--current' : '';
    };

    const navItems = pages.map(page => {
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
            {navItems}
        </ul>
    )
}

export default NavToPages;