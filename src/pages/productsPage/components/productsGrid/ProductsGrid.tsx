import { IProduct } from '../../../../types';
import ProductCard from '../productCard/ProductCard';
import './ProductsGrid.scss';

interface Props {
    gridItems: IProduct[] ;
    activeCategory: string;
}

const ProductsGrid = ({ gridItems, activeCategory }: Props) => {
    
    const gridItemsFilteredByActiveCategory = gridItems.filter(gridItem => gridItem.category === activeCategory);
    const gridElements = activeCategory === "all" ? gridItems : gridItemsFilteredByActiveCategory;
    
    const productItems = gridElements.map(gridElement => (
        <li key={gridElement.id}>
            <ProductCard cardContent={gridElement} />
        </li>
    )
    );         
    
    return (
        <ul className='grid'>
            {productItems}
        </ul>
    )
}

export default ProductsGrid;