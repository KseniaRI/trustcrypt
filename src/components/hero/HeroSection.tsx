import { NavLink } from 'react-router-dom';
import { IContent } from '../../types';

interface HeroSectionProps {
    content: IContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
    const { direction, title, text, src } = content;

    return (
        <div className={`heroSection ${direction}`}>
            <div className='heroDescription'>
                <h1 className="heroTitle">{title}</h1>
                <p className='heroText'>{text}</p>
                <NavLink to="products">
                    <button className='heroButton'>Подробнее</button>
                </NavLink>
            </div>
            <div className='heroImgWrap'>
                <img className='heroImg' src={src} alt="Cybersecurity"/>
            </div>
        </div>
    )
}

export default HeroSection;