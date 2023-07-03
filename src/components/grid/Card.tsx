import { IProduct } from '../../types';
import './Card.scss';

interface Props {
    cardContent: IProduct;
}

const Card = ({ cardContent }: Props) => {
    const { path, name, description } = cardContent;
    const imgSrc = require(`../../images/pictures/${path}.jpg`);

    return (
        <div className="card">
            <div className='card__img-wrap'>
                <img src={imgSrc} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card;