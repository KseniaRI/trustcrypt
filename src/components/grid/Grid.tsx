import './Grid.scss'
import { IProduct } from '../../types';
import Card from './Card';

interface Props {
    content: IProduct[];
    activeCategory: string;
}

const Grid = ({ content, activeCategory }: Props) => {
    
    const gridElements = activeCategory === "all" ?
        content :
        content.filter((contentItem) => contentItem.category === activeCategory);
    
    return (
        <div className='grid'>
            {gridElements.map(itemContent => (
                <Card key={itemContent.id} cardContent={itemContent} />
            ))}
        </div>
    )
}

export default Grid;