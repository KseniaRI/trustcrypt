import Media from 'react-media';
import Container from "../container/Container";
import Logo from "./components/logo/Logo";
import NavigationGroup from "./components/navigationGroup/NavigationGroup";
import MobileMenu from '../mobileMenu/MobileMenu';
import './Header.scss';
 
const Header = () => {

    const navigation = (
        <div>
            <Media queries={{
                small: "(max-width: 767px)",
                large: "(min-width: 768px)"
            }}>
                {matches => (
                    <>
                        {matches.small && <MobileMenu/>}
                        {matches.large && <NavigationGroup/>}
                    </>
            )}
            </Media>
        </div>
    ); 

    return (
        <div className="header">
            <Container>
                <div className='header__container'>
                    <Logo />
                    {navigation}
                </div>
            </Container>
        </div>
    )
}

export default Header;