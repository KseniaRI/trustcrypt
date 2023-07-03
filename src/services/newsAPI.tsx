import axios from 'axios';

const API_KEY = '21215947651e41e68d2d7571ad4aa875';

export const fetchNews = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=gaming&sortBy=popularity&pageSize=20&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.log(error);
    }
} 