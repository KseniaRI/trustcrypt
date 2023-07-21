import { useEffect, useState } from 'react';
import { Skeleton} from 'antd';
import { IArticle} from '../../types';
import Container from '../../components/container/Container';
import Article from './components/Article';
import { fetchNews } from '../../services/newsAPI';
import './newsPage.scss'

const NewsPage = () => {
    const [articles, setArticles] = useState<IArticle[] | []>([]);
    const [articlesAreLoading, setArticlesAreLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articlesData = await fetchNews(); 
                setArticles(articlesData);
            } catch (error) {
                alert(`Ошибка загрузки: ${error}`);
            } finally {
                setArticlesAreLoading(false);
            }
        }
        getArticles();
    }, [])

    const articlesList = articles?.length > 0 && (
        <ul>
            {articles.map(article => (
                    <li key={article.title}>
                        <Article article={article} />
                    </li>
                )
            )}
        </ul>
    );
            
    return (
        <div className="news">
            <Container>
                <h1 className='news__title'>Последние события в мире киберпространства</h1>
                <p className='news__text'>Ознакомьтесь с информацией, чтобы быть в курсе новейших киберугроз <br/> и получить советы экспертов по безопасности. </p>
                <div className='spin-wrap'>
                    <Skeleton loading={articlesAreLoading} paragraph={{ rows: 10 }} active />
                </div>
                {articlesList}
            </Container>
        </div>
    )
}

export default NewsPage;

