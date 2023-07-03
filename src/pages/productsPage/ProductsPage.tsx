import { useState } from 'react';
import Container from '../../components/container/Container';
import FilterBtns from '../../components/filterBtns/FilterBtns';
import Grid from '../../components/grid/Grid';
import { IProduct } from '../../types';
import './Products.scss';

const products: IProduct[] = require('./products.json');

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = products.map(product => product.category).filter((category, index, arr) => arr.indexOf(category) === index);

    return (
        <div className="products">
            <Container>
                <h1 className='products__title'>Наши продукты</h1>
                <p className='products__text'>Мы придерживаемся в своей работе простого принципа: детектировать <br/> и блокировать любую вредоносную атаку.</p>
                <FilterBtns categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Grid content={products} activeCategory={activeCategory} />
            </Container>
        </div>
    )
}

export default ProductsPage;