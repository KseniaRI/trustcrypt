import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';

enum Pages {
    "HOME" = "/",
    "NEWS" = "/news",
    "CONTACTS" = "/contacts",
    "PRODUCTS" = "/products"
}

const Nav = () => {
    const location = useLocation();

    const getCurrent = (page: Pages) => {
        return location.pathname === page ? 'nav__item--current' : '';
    }

    return (
        <ul className="nav">
            <li className={`nav__item ${getCurrent(Pages.HOME)}`}>
                <NavLink to='/'>Главная</NavLink>
            </li>
            <li className={`nav__item ${getCurrent(Pages.PRODUCTS)}`}>
                <NavLink to='products'>Продукты</NavLink>
            </li>
            <li className={`nav__item ${getCurrent(Pages.NEWS)}`}>
                <NavLink to='news'>Новости</NavLink>
            </li>
            <li className={`nav__item ${getCurrent(Pages.CONTACTS)}`}>
                <NavLink to='contacts'>Контакты</NavLink>
            </li>
        </ul>
    )
}

export default Nav;