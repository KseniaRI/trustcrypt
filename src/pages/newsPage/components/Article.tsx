import { IArticle } from "../../../types";
import './Article.scss';

interface Props {
    article: IArticle;
}

const Article = ({ article }: Props) => {
    // const { title, urlToImage, description, author, publishedAt } = article;
    const { title, media, summary, author, published_date } = article;
     
    const dateObj = new Date(published_date);
    const date = dateObj.toLocaleString();

    return (
        <div className='article'>
            <div className="article__img-wrap">
                <img className='article__img' src={media} alt={title} width={320} height={320}/>
            </div>
            <div className='article__content'>
                <h3 className='article__title'>{title}</h3>
                <p className='article__description'>{summary}</p>
                {author && <p className='article__label'>{author}</p>}
                <p className='article__label'>{date}</p>
            </div>
        </div>
    )
}

export default Article;