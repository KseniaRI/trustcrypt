import Container from "../container/Container";
import Logo from "./components/logo/Logo";
import Navigation from './components/navigation/Navigation';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <div className='header__container'>
                    <Logo />
                    <Navigation/>
                </div>
            </Container>
        </div>
    )
}

export default Header;