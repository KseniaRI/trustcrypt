import './App.scss';
import HomePage from './pages/homePage/HomePage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/newsPage/NewsPage';
import SharedLayout from './components/sharedLayout/SharedLayout';
import ProductsPage from './pages/productsPage/ProductsPage';
import ContactsPage from './pages/contactsPage/ContactsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='contacts' element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
