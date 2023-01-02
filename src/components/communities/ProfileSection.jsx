import { useContext } from 'react';
// import female from '../../assets/female.png';
import './ProfileSection.css';
import { GlobalState } from './../../GlobalState';

const ProfileSection = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const { avatar, fullname, email } = user;
  return (
    <>
      <div className='list-group social mt-3'>
        <li className='list-group-item'>User Profile</li>
        <div className='card-body profile-section'>
          <div className='profile-center'>
            <div className='profiles-div'>
              <img src={avatar} alt='' />
            </div>

            <h5>{fullname}</h5>
            <p>{email}</p>
            <button className='btn btn-primary w-100'>PROFILE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
