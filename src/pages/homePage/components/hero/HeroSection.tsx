import { NavLink } from 'react-router-dom';
import './HeroSection.scss'
import { IContent } from '../../../../types';

interface Props {
    content: IContent;
}

const HeroSection = ({ content }: Props) => {
    const { direction, title, text, src } = content;

    return (
        <div className={`hero-section hero-section--${direction}`}>
            <div className='hero-section__description'>
                <h1 className="title">{title}</h1>
                <p className='hero-section__text'>{text}</p>
                <NavLink to="products">
                    <button className='hero-section__button'>Подробнее</button>
                </NavLink>
            </div>
            <div className='hero-section__img'>
                <img src={src} alt="Cybersecurity" width={681} height={376} />
            </div>
        </div>
    )
}

export default HeroSection;