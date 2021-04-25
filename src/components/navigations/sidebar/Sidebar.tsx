import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import classNames from 'classnames';
import { UserContext } from '../../../shared/provider/UserProvider';
import { ModeContext } from '../../../shared/provider/ModeProvider';
import { Profile } from '../profile/Profile';
import RoutingPath from '../../../routes/RoutingPath';

import logo from '../../../shared/images/blooming.svg';
import './sidebar.css';

export const Sidebar = (props: {drawerIsOpen:  boolean, drawerHandler:(handler: boolean)=> void}) => {
  const history = useHistory();
  const [auth, setAuth] = useContext(UserContext);
	const [checked] = useContext(ModeContext);

	const theme = classNames(
    {
      'dark-nav': checked
    }
  );

  const logOut = () => {
    setAuth(null);
    localStorage.clear();
    history.push(RoutingPath.LoginView, props.drawerHandler(false));
  };  

  return (
   <nav className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
     <span className={theme}>
        <span className="down-nav">
          {auth ? <Profile /> : <div onClick={()=> history.push(RoutingPath.LoginView, props.drawerHandler(false))}  style={{cursor:"pointer", margin:"15px"}}><h1>Login</h1>
          </div> } 
        </span>
          <span onClick={()=> history.push(RoutingPath.HomeView, props.drawerHandler(false))} id="logo"><img src={logo} alt="logo" /></span><br/>
        <ul>
          <li onClick={()=> history.push(RoutingPath.NewsView, props.drawerHandler(false))}>News</li>
          <li onClick={()=> history.push(RoutingPath.GalleryView, props.drawerHandler(false))}>Gallery</li>
          <li onClick={()=> history.push(RoutingPath.ShopView, props.drawerHandler(false))}>Shop</li>
          <li onClick={()=>logOut()}>Log out</li>
        </ul>
     </span>
          <h1 onClick={()=>props.drawerHandler(false)} style={{cursor:"pointer", margin:"15px"}}>Close</h1>
   </nav>
  )
}
