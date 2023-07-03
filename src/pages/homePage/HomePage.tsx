import Container from '../../components/container/Container';
import './HomePageStyles.scss';
import './components/mainSection/MainSection.scss'
import Main from './components/mainSection/Main';
import Instruments from './components/instruments/Instruments';
import Security from './components/security/Security';

const HomePage = () => {
    return (
        <div className="home">
            <Container>
                <Main />
                <Instruments />
                <Security/>
            </Container>
        </div>
    )
}

export default HomePage;