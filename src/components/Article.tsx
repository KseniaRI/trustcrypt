import { IArticle } from "../types";

interface ArticleProps {
    article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
    const { title, description, pubDate } = article;
     
    const dateObj = new Date(pubDate);
    const date = dateObj.toLocaleString();

    return (
        <div className='article'>
            <h3>{title}</h3>
            <p className='articleDescription'>{description}</p>
            <p className='articleLabel'>{date}</p>
        </div>
    )
}

export default Article;