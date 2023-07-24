import { ReactComponent as MenuBtnIcon } from '../../images/icons/menu-btn.svg';
import './MobileMenu.scss';

interface Props {
    handleMenuToggle: () => void; 
}

const MenuBtn = ({ handleMenuToggle }: Props) => {
    return (
        <button className='mobile-menu__open-btn' onClick={handleMenuToggle}>
            <MenuBtnIcon />
        </button>
    )
}

export default MenuBtn;