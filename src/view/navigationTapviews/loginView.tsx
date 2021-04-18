import { useContext, useState } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import { useHistory } from 'react-router-dom';
import RoutingPath from "../../routes/RoutingPath";

import './login.css'

export const LoginView = () => {
const [,setAuth] = useContext(UserContext);
const [user, setUser] = useState({name:'', password:''});
const history = useHistory();


const logInHandler = () => {
  setAuth(user.name);
  localStorage.setItem('username', user.name);
  history.push(RoutingPath.HomeView);
};

const changeHandler = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <div className="login-view">
      <div className="card">
        <div className="title">
          <h1>Log in</h1>
        </div>
        <div className="text-name">
           Username:
        </div>
        <div className="input-name">
            <input name='name' value={user.name} type='text' onChange={changeHandler} />
        </div>
        <div className="text-password">
          Password: 
        </div>
        <div className="input-password">
          <input name="password" value={user.password} type='password' onChange={changeHandler} />
        </div>
        <div className="button">
          <button onClick={()=> logInHandler()}>Logga in</button>
        </div>
      </div>
    </div>
  );
};
  