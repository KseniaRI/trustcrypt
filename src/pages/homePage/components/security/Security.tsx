import './Security.scss';
import { ReactComponent as Anon } from '../../../../images/icons/anon.svg';
import { ReactComponent as Protect } from '../../../../images/icons/protect.svg';
import { ReactComponent as Check } from '../../../../images/icons/check.svg';

const Security = () => {

    const securityDetails = [
        {
            "icon": Anon,
            "text": "Анонимность"
        },
        {
            "icon": Check,
            "text": "Проверка на наличие угроз",
        },
        {
            "icon": Protect,
            "text": "Обнаружение и предотвращение аттак"
        }
    ];

    const securityCharacteristics = securityDetails.map(({ icon, text }, index) => {
        const Svg = icon;

        return (
            <li className='security__item' key={`security-${index}`}>
                <div className='security__icon-wrap'>
                    <Svg className='security__icon' />
                </div>
                <p>{text}</p>
            </li>
        )
    });

    return (
        <div className='security'>
            <h2 className='security__title'>Наши продукты направлены на вашу безопасность. </h2>
            <p className='security__text'>Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.</p>
            <ul className='security__list'>
                {securityCharacteristics}
            </ul>
        </div>
    )
}

export default Security;