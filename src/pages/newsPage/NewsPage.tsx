import { useEffect, useState } from 'react';
import { IArticle} from '../../types';
import Container from '../../components/container/Container';
import Article from './components/Article';
import { fetchNews } from '../../services/newsAPI';
import './newsPage.scss'

const NewsPage = () => {
    const [articles, setArticles] = useState<IArticle[] | []>([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const articlesData = await fetchNews(); 
                setArticles(articlesData);
            } catch (error) {
                console.log(error);
            }
        }
        getNews();
    }, [])

    const news = <ul>
                    {articles.length > 0 && articles.map(article => (
                            <li key={article.title}>
                                <Article article={article} />
                            </li>
                        )
                    )}
                </ul>
   
    return (
        <div className="news">
            <Container>
                <h1 className='news__title'>Последние события в мире киберпространства</h1>
                <p className='news__text'>Ознакомьтесь с информацией, чтобы быть в курсе новейших киберугроз <br/> и получить советы экспертов по безопасности. </p>
                {news}
            </Container>
        </div>
    )
}

export default NewsPage;

