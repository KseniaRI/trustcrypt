import { useState } from "react";
import { Drawer } from "antd";
import NavigationGroup from "../header/components/navigationGroup/NavigationGroup";
import { ReactComponent as CloseMenuIcon } from '../../images/icons/close-btn.svg';
import { ReactComponent as OpenMenuIcon } from '../../images/icons/menu-btn.svg';
import './MobileMenu.scss';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const showHideDrawer = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
      };
    
    const menuIcon = open ? <CloseMenuIcon /> : <OpenMenuIcon />;
    
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
                open={open}
                rootClassName="mobile-menu"
            >
                <NavigationGroup  /> 
            </Drawer>
        </div>
    )
}

export default MobileMenu;