import { useContext } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';

import './profile.css';
import { ProfileDropdown } from './ProfileDropdown';


export const Profile = (): JSX.Element => {
  const [auth, ] = useContext(UserContext);
console.log(auth);

  return (
      <li id='log-out' className="profile-wrapper" >
        <span>
          <h3>Välkommen {auth}</h3>
        </span>
        <ProfileDropdown /> 
      </li>
  );
};
