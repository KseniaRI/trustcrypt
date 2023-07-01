import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoTelegram } from 'react-icons/bi'
import './Social.scss';
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <ul className='social'>
            <li className='social__item'>
                <Link to={'https://www.facebook.com/'} target="_blank" className='social__link'>
                    <BiLogoFacebook className='social__icon' />
                </Link>
            </li>
            <li className='social__item'>
                <Link to={'https://www.instagram.com/'} target="_blank" className='social__link'>
                    <BiLogoInstagram className='social__icon' />
                </Link>
            </li>
            <li className='social__item'>
                <Link to={'https://twitter.com/'} target="_blank" className='social__link'>
                    <BiLogoTwitter className='social__icon' />
                </Link>
            </li>
            <li className='social__item'>
                <Link to={'https://web.telegram.org/'} target="_blank" className='social__link'>
                    <BiLogoTelegram className='social__icon' />
                </Link>
            </li>
        </ul>
    )
}

export default Social;