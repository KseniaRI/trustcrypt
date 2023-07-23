import axios from 'axios';

// const API_KEY = '21215947651e41e68d2d7571ad4aa875';
const API_KEY = 'UgOxUob42ZFzqB2Aqw_O0YYGPLZd1d389fZCF2hjSfM';
const options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'cyber-security', lang: 'en', sort_by: 'relevancy', page: '20'},
  headers: {
    'x-api-key': API_KEY
  }
};
export const fetchNews = async () => {
    try {
        // const response = await axios.get(`https://newsapi.org/v2/everything?q=gaming&sortBy=popularity&pageSize=20&apiKey=${API_KEY}`);
        const response = await axios.request(options);
        return response.data.articles;
    } catch (error) {
        console.log(error);
    }
} 