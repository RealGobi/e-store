import { useContext } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';

import { ProfileDropdown } from './ProfileDropdown';
import { useWindowDimension } from '../../../shared/hooks/useWindowDimension';

import './profile.css';

export const Profile = (): JSX.Element => {
  const [auth, ] = useContext(UserContext);

  const { width } = useWindowDimension();

  return (
    <li id='log-out' className="profile-wrapper" >
        <span>
          <h3>Välkommen {auth}</h3>
        </span>
        {width >= 1000 && <ProfileDropdown /> } 
    </li>
  );
};
