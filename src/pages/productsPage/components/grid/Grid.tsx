import { IProduct } from '../../../../types';
import Card from '../card/Card';
import './Grid.scss';

interface Props {
    content: IProduct[] ;
    activeCategory: string;
}

const Grid = ({ content, activeCategory }: Props) => {
    
    const gridElements = activeCategory === "all" ?
        content :
        content.filter((contentItem) => contentItem.category === activeCategory);
    
    const products = gridElements.map(itemContent => (
        <li key={itemContent.id}>
            <Card cardContent={itemContent} />
        </li>
    )
    );         
    
    return (
        <ul className='grid'>
            {products}
        </ul>
    )
}

export default Grid;