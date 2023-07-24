import { IArticle } from "../../../types";
import './Article.scss';

interface Props {
    article: IArticle;
}

const Article = ({ article }: Props) => {
    const { title, description, pubDate } = article;
     
    const dateObj = new Date(pubDate);
    const date = dateObj.toLocaleString();

    return (
        <div className='article'>
            <h3 className='article__title'>{title}</h3>
            <p className='article__description'>{description}</p>
            <p className='article__label'>{date}</p>
        </div>
    )
}

export default Article;