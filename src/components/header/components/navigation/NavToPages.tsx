import { NavLink } from 'react-router-dom';

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
    const pages: Page[] = Object.values(Page);

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

    return (
        <ul className="nav">
            {navItems}
        </ul>
    )
}

export default NavToPages;