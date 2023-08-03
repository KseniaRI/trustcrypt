import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import SharedLayout from './components/SharedLayout';
import ProductsPage from './pages/ProductsPage';
import FavoritesPage from './pages/FavoritesPage';
import './App.scss';

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
