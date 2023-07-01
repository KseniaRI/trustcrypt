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

    const useCurrent = (page: Pages) => {
        return location.pathname === page ? 'nav__item--current' : '';
    }
    
    return (
        <ul className="nav">
            <li className={`nav__item ${useCurrent(Pages.HOME)}`}>
                <NavLink to='/'>Главная</NavLink>
            </li>
            <li className={`nav__item ${useCurrent(Pages.PRODUCTS)}`}>
                <NavLink to='products'>Продукты</NavLink>
            </li>
            <li className={`nav__item ${useCurrent(Pages.NEWS)}`}>
                <NavLink to='news'>Новости</NavLink>
            </li>
            <li className={`nav__item ${useCurrent(Pages.CONTACTS)}`}>
                <NavLink to='contacts'>
                    Контакты
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav;