import './FilterBtns.scss';

interface Props {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const FilterBtns = ({ categories, activeCategory, setActiveCategory }: Props) => {
    
    const setActiveStyles = (category: string) => {
        return activeCategory === category ? 'filter__btn--active' : '';
    };
    
    return (
        <div className="filter">
            <button
                className={`filter__btn ${setActiveStyles('all')}`}
                onClick={() => setActiveCategory('all')}
            >
                Все
            </button>
            {categories.map(category => (
                <button
                    className={`filter__btn ${setActiveStyles(category)}`}
                    key={category}
                    onClick={()=>setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default FilterBtns;