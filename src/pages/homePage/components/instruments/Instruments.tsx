import './Instruments.scss';
import { ReactComponent as Metalsploit } from '../../../../images/icons/metasploit.svg';
import { NavLink } from 'react-router-dom';

const instruments = [Metalsploit, Metalsploit, Metalsploit, Metalsploit];

const Instruments = () => {
    return (
        <div className='instruments'>
            <h2 className='instruments__title'> Инструменты</h2>
            <p className='instruments__text'>Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.</p>
            <ul className='instruments__list'>
                {instruments.map((Instrument, index) => (
                    <li key={`${Instrument}-${index}`} className='instruments__item'>
                        <NavLink to='products'>
                            <Instrument className="instruments__icon"/>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Instruments;