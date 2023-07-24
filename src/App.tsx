import './App.scss';
import HomePage from './pages/homePage/HomePage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/newsPage/NewsPage';
import SharedLayout from './components/sharedLayout/SharedLayout';
import ProductsPage from './pages/productsPage/ProductsPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='favorites' element={<FavoritesPage/>} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
