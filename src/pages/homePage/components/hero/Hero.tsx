import HeroSection from "./components/HeroSection";
import homeRight from '../../../../images/pictures/home-right.jpg';
import homeLeft from '../../../../images/pictures/home-left.jpg';
import { IContent } from '../../../../types';
import './components/HeroSection.scss';

const Hero = () => {

    const contents: IContent[] = [
        {
            "title": "Последние события в мире киберпространства",
            "text": "Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса.",
            "direction": "normal",
            "src": homeRight
        },
        {
            "title": "Кибербезопасность нового поколения",
            "text": "Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.",
            "direction": "reverse",
            "src": homeLeft
        }
    ];

    const heroSections = contents.map((content,index) => (
        <li key={`${content.title}-${index}`}>
            <HeroSection content={content} />
        </li>
    ));

    return (
        <section>
            <ul className='hero'>
                {heroSections}
            </ul>
        </section>
    )
}

export default Hero;