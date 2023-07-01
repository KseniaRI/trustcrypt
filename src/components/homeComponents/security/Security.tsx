import './Security.scss';
import { ReactComponent as Anon } from '../../../images/icons/anon.svg';
import { ReactComponent as Protect } from '../../../images/icons/protect.svg';
import { ReactComponent as Check } from '../../../images/icons/check.svg';

const Security = () => {
    return (
        <div className='security'>
            <h2 className='security__title'>Наши продукты направлены на вашу безопасность. </h2>
            <p className='security__text'>Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.</p>
            <ul className='security__list'>
                <li className='security__item'>
                    <div className='security__icon-wrap'>
                        <Anon className='security__icon'/>
                    </div>
                    <p>Анонимность</p>
                </li>
                <li className='security__item'>
                    <div className='security__icon-wrap'>
                        <Check className='security__icon'/>
                    </div>
                    <p>Проверка на наличие угроз</p>
                </li>
                <li className='security__item'>
                    <div className='security__icon-wrap'>
                        <Protect className='security__icon'/>
                    </div>
                    <p>Обнаружение и предотвращение аттак</p>
                </li>
            </ul>
        </div>
    )
}

export default Security;