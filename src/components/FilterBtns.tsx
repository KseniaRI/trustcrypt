interface FilterBtnsProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const FilterBtns = ({ categories, activeCategory, setActiveCategory }: FilterBtnsProps) => {
    
    const setActiveStyles = (category: string) => {
        return activeCategory === category ? 'filter__btn--active' : '';
    };
    
    const categoryButtons = categories.map(category => (
        <button
            className={`filter__btn ${setActiveStyles(category)}`}
            key={category}
            onClick={() => setActiveCategory(category)}
        >
            {category}
        </button>
    ));

    return (
        <div className="filter">
            <button
                className={`filter__btn ${setActiveStyles('all')}`}
                onClick={() => setActiveCategory('all')}
            >
                Все
            </button>
            {categoryButtons}
        </div>
    )
}

export default FilterBtns;