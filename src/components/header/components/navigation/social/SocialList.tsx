import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoTelegram } from 'react-icons/bi'
import './SocialList.scss';
import { Link } from 'react-router-dom';

const SocialList = () => {
    const socials = [
        {
            "path": "https://www.facebook.com/",
            "icon": BiLogoFacebook
        },
        {
            "path": "https://www.instagram.com/",
            "icon": BiLogoInstagram
        },
        {
            "path": "https://twitter.com/",
            "icon": BiLogoTwitter
        },
        {
            "path": "https://web.telegram.org/",
            "icon": BiLogoTelegram
        },
    ]

    const socialItems = socials.map(social => {
        const Svg = social.icon;
        const path = social.path;

        return (
            <li className='social__item' key={path}>
                <Link to={path} target="_blank" className='social__link'>
                    <Svg className='social__icon' />
                </Link>
            </li>
        )
    });

    return (
        <ul className='social'>
            {socialItems}
        </ul>
    )
}

export default SocialList;