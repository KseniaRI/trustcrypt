import { useState } from 'react';
import Container from '../../components/container/Container';
import FilterBtns from '../../components/filterBtns/FilterBtns';
import ProductsGrid from './components/productsGrid/ProductsGrid';
import { IProduct } from '../../types';
import './ProductsPage.scss';

const products: IProduct[] = require('./products.json');

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const uniqueCategories = products.map(product => product.category).filter((category, index, arr) => arr.indexOf(category) === index);

    return (
        <div className="products">
            <Container>
                <h1 className='products__title'>Наши продукты</h1>
                <p className='products__text'>Мы придерживаемся в своей работе простого принципа: детектировать <br/> и блокировать любую вредоносную атаку.</p>
                <FilterBtns
                    categories={uniqueCategories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <ProductsGrid
                    gridItems={products}
                    activeCategory={activeCategory}
                />
            </Container>
        </div>
    )
}

export default ProductsPage;