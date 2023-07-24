import { IProduct } from '../../../../types';
import ProductCard from '../productCard/ProductCard';
import './ProductsGrid.scss';

interface Props {
    gridItems: IProduct[] ;
}

const ProductsGrid = ({ gridItems }: Props) => {
    
    const productItems = gridItems.map(gridItem => (
        <li key={gridItem.id}>
            <ProductCard cardContent={gridItem} />
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