import { NavLink } from 'react-router-dom';
import './Instruments.scss';
import { ReactComponent as Metalsploit } from '../../../../images/icons/metasploit.svg';

const instruments = [Metalsploit, Metalsploit, Metalsploit, Metalsploit];

const Instruments = () => {

    const instrumentsItems = instruments.map((instrument, index) => {
        const InstrumentSvg = instrument;
        
        return (
            <li key={`${instrument}-${index}`} className='instruments__item'>
                <NavLink to='products'>
                    <InstrumentSvg className="instruments__icon" />
                </NavLink>
            </li>
        )
    });

    return (
        <div className='instruments'>
            <h2 className='instruments__title'> Инструменты</h2>
            <p className='instruments__text'>Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.</p>
            <ul className='instruments__list'>
                {instrumentsItems}
            </ul>
        </div>
    )
}

export default Instruments;