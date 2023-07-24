import NavToPages from "../navToPages/NavToPages"
import SocialList from "../social/SocialList";
import './NavigationGroup.scss';

const NavigationGroup = () => {
    return (
        <div className="navigation-group">
            <NavToPages />
            <SocialList/>
        </div>
    )
}

export default NavigationGroup;