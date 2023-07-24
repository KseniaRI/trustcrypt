import axios from 'axios';

const API_KEY = 'pub_26682654cfea1a0deee3410ba05e97dd63239'

export const fetchNews = async () => {
    try {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=cyber-security&category=technology`);
      return response.data.results;
    } catch (error) {
        console.log(error);
    }
} 