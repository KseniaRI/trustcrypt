import { NavLink } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import { removeUser } from '../../../../redux/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { clearFavorites } from '../../../../redux/favorites/favoritesSlice';
import { IPage, Status } from '../../../../types';
import { getUserStatus } from '../../../../redux/user/userSelectors';

const pages: IPage[] = require('../../../../utils/pages.json');

const NavToPages = () => {
    const dispatch = useAppDispatch();
    const userStatus = useAppSelector(getUserStatus);

    const onLogoutClick = () => {
        dispatch(removeUser());
        dispatch(clearFavorites());
        localStorage.setItem("userId", "");
    };

    const navItems = pages.map(page => {
        const path = page.path;
        const pageName = page.name;

        return (
            <li key={path} className="navItem">
                <NavLink to={path}>
                    {pageName}
                </NavLink>
            </li>
        )
    });

    const authNavItem = userStatus === Status.RESOLVED  ?
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