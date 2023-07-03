import { IArticle } from "../../../types";
import './Article.scss';

interface Props {
    article: IArticle;
}

const Article = ({ article }: Props) => {
    const { title, urlToImage, description, author, publishedAt } = article;
     
    const dateObj = new Date(publishedAt);
    const date = dateObj.toLocaleString();

    return (
        <div className='article'>
            <img className='article__img' src={urlToImage} alt={title} width={380} />
            <div className='article__content'>
                <h3 className='article__title'>{title}</h3>
                <p className='article__description'>{description}</p>
                <p className='article__label'>{author}</p>
                <p className='article__label'>{date}</p>
            </div>
        </div>
    )
}

export default Article;