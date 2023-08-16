import { IArticle } from "../types";
import ShowMoreText from "react-show-more-text";

interface ArticleProps {
    article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
    const { title, description, pubDate } = article;
     
    const dateObj = new Date(pubDate);
    const date = dateObj.toLocaleString();
    const visibleTextLines = window.innerWidth >= 768 ? 10 : 5;

    return (
        <div className='article'>
            <h3 className="articleTitle">{title}</h3>
            <ShowMoreText
                lines={visibleTextLines}
                more="Show more"
                less="Show less"
                className="articleDescription"
                anchorClass="show-more-less-clickable"
                expanded={false}
                truncatedEndingComponent={"... "}
            >
                {description}
            </ShowMoreText>
            <p className='articleLabel'>{date}</p>
        </div>
    )
}

export default Article;