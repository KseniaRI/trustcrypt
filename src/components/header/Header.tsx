import Container from "../container/Container";
import Logo from "./components/logo/Logo";
import Nav from "./components/nav/Nav";
import Social from "./components/social/Social";
import './Header.scss';
 
const Header = () => {

    return (
        <Container>
            <div className="header">
                <Logo />
                <div className="header__nav-social">
                    <Nav/>
                    <Social/>
                </div> 
            </div>
        </Container>
    )
}

export default Header;