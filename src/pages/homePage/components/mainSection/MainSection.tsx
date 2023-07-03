import { ReactNode } from 'react';
import './MainSection.scss'

interface Props {
    direction: "normal" | "reverse";
    imgSrc: string;
    children: ReactNode;
}

const MainSection = ({ direction, imgSrc, children }: Props) => {
    return (
        <div className={`main-section main-section--${direction}`}>
            <div>{children}</div>
            <div className='main-section__img'><img src={imgSrc} alt="Cybersecurity" width={681} height={376}/></div>
        </div>
    )
}

export default MainSection;