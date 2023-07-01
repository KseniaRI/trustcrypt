import Container from '../../components/container/Container';
import './HomePageStyles.scss';
import '../../components/homeComponents/mainSection/MainSection.scss'
import Main from '../../components/homeComponents/mainSection/Main';
import Instruments from '../../components/homeComponents/instruments/Instruments';
import Security from '../../components/homeComponents/security/Security';

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