import Container from "../Container";
import Logo from "./components/Logo";
import Navigation from './components/navigation/Navigation';
// import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <div className='headerContainer'>
                    <Logo />
                    <Navigation/>
                </div>
            </Container>
        </div>
    )
}

export default Header;