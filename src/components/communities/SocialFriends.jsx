import React, { useContext } from 'react';
import { PersonAdd } from '@material-ui/icons';

import './SocialFriends.css';
import { GlobalState } from './../../GlobalState';
import { Link } from 'react-router-dom';

const SocialFriends = () => {
  const state = useContext(GlobalState);
  const [values] = state.userApi.values;

  if (values.length === 0) return null;
  if (values === null) return null;
  return (
    <div>
      <li className='list-group-item'>Make Friends</li>
      {values.map((item) => {
        const { _id, avatar, fullname, stack } = item;
        return (
          <div key={_id} className='social-friends'>
            <div className='friends-left'>
              <div className='friends-image'>
                <img src={avatar} alt='' />
              </div>
              <Link to={`/user/social/profile/${_id}`}>
                <div className='friends-name'>
                  <span>{fullname}</span>
                  <br />
                  {stack}
                </div>
              </Link>
            </div>

            <div className='friends-right'>
              <div className='follow'>
                <PersonAdd className='follow-icon' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialFriends;
