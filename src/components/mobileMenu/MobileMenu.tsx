import { useState } from "react";
import { Drawer } from "antd";
import NavigationGroup from "../header/components/navigation/navigationGroup/NavigationGroup";
import { ReactComponent as CloseMenuIcon } from '../../images/icons/close-btn.svg';
import { ReactComponent as OpenMenuIcon } from '../../images/icons/menu-btn.svg';
import './MobileMenu.scss';

const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const showHideDrawer = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const onClose = () => {
        setMenuIsOpen(false);
    };
    
    const menuIcon = menuIsOpen ? <CloseMenuIcon /> : <OpenMenuIcon />;
    
    return (
        <div className="menu">
            <button className="mobile-menu__btn" onClick={showHideDrawer}>
                {menuIcon}
            </button>
            <Drawer
                placement="top"
                closable={false}
                onClose={onClose}
                onClick={onClose}
                open={menuIsOpen}
                rootClassName="mobile-menu"
            >
                <NavigationGroup/> 
            </Drawer>
        </div>
    )
}

export default MobileMenu;