import { useContext, useState } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';
import { ModeContext } from '../../../shared/provider/ModeProvider';
import {useHistory} from 'react-router-dom';

import RoutingPath from '../../../routes/RoutingPath';
import sun from '../../../shared/images/sun.svg'
import moon from '../../../shared/images/moon.svg'

import './profile.css';

export const ProfileDropdown = () => {

  const [language, setLanguage] = useState(true);
  const [checked, setChecked] = useContext(ModeContext);
  const [,setAuth] = useContext(UserContext);
  const history = useHistory();

  const logOut = () => {
    setAuth(null);
    localStorage.clear();
    history.push(RoutingPath.LoginView);
  };  

  const themeHandler  = () => {
    setChecked(!checked);
    console.log(checked);
    
    localStorage.setItem('theme', checked);
  };
 
  return (
    <div className="profile-dropdown-wrapper">
      <span style={{cursor:"default"}}>
        <div style={{margin:"0 0 10px 0"}}>Name</div>
        <div className="dropdown-margin">Email</div>
      </span>
      <hr/>
      <div className="dropdown-margin" onClick={()=> history.push(RoutingPath.ProfileView)}>Profile</div>
      <div className="dropdown-margin" onClick={()=> history.push(RoutingPath.SavedView)}>Sparade</div>
      <div onClick={()=> setLanguage(!language)} className="dropdown-margin">Språk: {language ? 'SE' : 'EN'}</div>
      <span className="dropdown-margin theme">
        <img style={{width:"25px"}} src={sun} alt="light theme"/>
        <label className="switch">
          <input name='checker' type="checkbox" onChange={themeHandler} />
          <span className="slider round"></span>
        </label>
        <img style={{width:"25px"}} src={moon} alt="dark theme"/>
      </span>
      <hr/>
      <div onClick={()=>logOut()} className="dropdown-margin">Logga ut</div>
    </div>
  )
}
