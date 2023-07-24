import Nav from "../nav/Nav"
import SocialList from "../social/SocialList";
import './NavigationGroup.scss';

const NavigationGroup = () => {
    return (
        <div className="navigation-group">
            <Nav />
            <SocialList/>
        </div>
    )
}

export default NavigationGroup;