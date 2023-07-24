import { ReactNode } from "react";
import './Section.scss';

interface Props {
    children: ReactNode;
}

const Section = ({ children }: Props) => {
    return (
        <section className="section">{children}</section>
    )
}

export default Section;