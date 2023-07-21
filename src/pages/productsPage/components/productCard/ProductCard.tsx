import { Spin } from 'antd';
import { IProduct } from '../../../../types';
import './ProductCard.scss';

interface Props {
    cardContent: IProduct;
}

const ProductCard = ({ cardContent }: Props) => {
    const { path, name, description } = cardContent;
    const imgSrc = require(`../../../../images/pictures/${path}.jpg`);

    return (
        <div className="product-card">
            <div className='product-card__img-wrap'>
                <Spin spinning={!imgSrc} size='large'>
                    <img src={imgSrc} alt={name} />
                </Spin>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard;