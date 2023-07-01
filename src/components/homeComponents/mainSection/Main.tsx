import MainSection from "./MainSection";
import homeRight from '../../../images/pictures/home-right.jpg';
import homeLeft from '../../../images/pictures/home-left.jpg';
import { NavLink } from 'react-router-dom';

const Main = () => {
    return (
        <div className='home__main'>
            <MainSection direction='normal' imgSrc={homeRight}>
                <div className='main-section__description'>
                    <h1 className="title">Последние события в мире <br /> киберпространства</h1>
                    <p className='main-section__text'>Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса. </p>
                    <NavLink to="news">
                        <button className='main-section__button'>Подробнее</button>
                    </NavLink>
                </div>
            </MainSection>
            <MainSection direction='reverse' imgSrc={homeLeft}>
                <div className='main-section__description'>
                    <h1 className="title">Кибербезопасность нового<br />поколения</h1>
                    <p className='main-section__text' >Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса. </p>
                    <NavLink to="products">
                        <button className='main-section__button'>Подробнее</button>
                    </NavLink>
                </div>
            </MainSection>
        </div>
    )
}

export default Main;