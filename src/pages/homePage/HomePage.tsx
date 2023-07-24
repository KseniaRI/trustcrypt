import Hero from './components/hero/Hero';
import Instruments from './components/instruments/Instruments';
import Security from './components/security/Security';
import Container from '../../components/container/Container';
import './HomePage.scss';
import './components/hero/HeroSection.scss'

const HomePage = () => {
    return (
        <div className="home">
            <Container>
                <Hero />
                <Instruments />
                <Security />
            </Container>
        </div>
    )
}

export default HomePage;