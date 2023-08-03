import { ReactComponent as LogoIcon } from '../../../assets/images/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to='/' className='logo'>
            <LogoIcon className='logo__icon' />
            <p className='logo__text'>Trustcrypt</p>
        </NavLink>
    )
}

export default Logo;