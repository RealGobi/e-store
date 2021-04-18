import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../../shared/images/blooming.svg';
import RoutingPath from '../../routes/RoutingPath';
import { UserContext } from '../../shared/provider/UserProvider';

import './DesktopNavigation.css';
import { Profile } from './profile/Profile';
import { ModeContext } from '../../shared/provider/ModeProvider';
import classNames from 'classnames';

export const DesktopNavigation = () => {
  const history = useHistory();
  const [auth] = useContext(UserContext);
	const [checked] = useContext(ModeContext);

	const theme = classNames(
    'navigation-wrapper',
    {
      'dark-nav': checked
    }
  );

  return (
    <div className={theme}>
      <ul>
      {auth ? <Profile /> : <li onClick={()=> history.push(RoutingPath.LoginView)} id="login">Login</li> } 
        <li onClick={()=> history.push(RoutingPath.NewsView)}>News</li>
        <li onClick={()=> history.push(RoutingPath.GalleryView)}>Gallery</li>
        <li onClick={()=> history.push(RoutingPath.ShopView)}>Shop</li>
        <span onClick={()=> history.push(RoutingPath.HomeView)} id="logo"><img src={logo} alt="logo" /></span>
      </ul>
    </div>
  )
};
