import './DesktopNavigation.css';
import {useHistory} from 'react-router-dom';
import logo from '../../shared/images/blooming.svg';
import RoutingPath from '../../routes/RoutingPath';


export const DesktopNavigation = () => {
  const history = useHistory();

  return (
    <div className="navigation-wrapper">
      <ul>
        <li onClick={()=> history.push(RoutingPath.loginView)} id="login">Login</li>
        <li onClick={()=> history.push(RoutingPath.newsView)}>News</li>
        <li onClick={()=> history.push(RoutingPath.galleryView)}>Gallery</li>
        <li onClick={()=> history.push(RoutingPath.shopView)}>Shop</li>
        <span onClick={()=> history.push(RoutingPath.homeView)} id="logo"><img src={logo} alt="logo" /></span>
      </ul>
    </div>
  )
};
