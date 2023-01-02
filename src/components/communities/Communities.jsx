import React, { useState } from 'react';
import { CameraAltOutlined, Mood, Menu } from '@material-ui/icons';
import './Communities.css';
import SocialFriends from './SocialFriends';
import ProfileSection from './ProfileSection';
import Navigation from './Navigation';
import SocialDisplay from './SocialDisplay';
import Modal from './Modal';
import LeftBar from '../leftbar/LeftBar';
import RightBar from '../rightbar/RightBar';

const Communities = ({ socket }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  // The left function
  const lefter = () => {
    setLeft(!left);
  };

  // The right function
  const righter = () => {
    setRight(!right);
    console.log('clicked');
  };

  // THE SECTION OF THE STYLE MENU
  const style = {
    left: left ? 0 : '-100%',
  };

  // THE SECTION OF THE STYLS
  const styles = {
    right: right ? 0 : '-100%',
  };

  return (
    <div className='community'>
      <div className='container-fluid mt-4'>
        <div className='list-group'>
          <div className='list-group-item text-center d-flex justify-content-between'>
            <Menu onClick={lefter} className='lefter' />
            SOCIAL COMMUNITY
            <Menu onClick={righter} className='righter' />
          </div>

          <LeftBar style={style} lefter={lefter} />
          <RightBar styles={styles} righter={righter} />
        </div>
        <div className='row'>
          <div className='col-lg-3 navigation'>
            <ProfileSection />
            <Navigation />
          </div>

          <div className='col-lg-6'>
            <div className='list-group social mt-3'>
              <li className='list-group-item'>Social</li>
              <div className='card-body card-upload'>
                <div
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  className='send-text'
                >
                  What's on your mind?
                </div>
                <div className='card-btn py-2'>
                  <span
                    onClick={() => {
                      setModalOpen(true);
                    }}
                    className='social-btn'
                  >
                    <CameraAltOutlined className='social-icon' />
                    Photo
                  </span>
                  <span
                    onClick={() => {
                      setModalOpen(true);
                    }}
                    className='social-btn mood'
                  > 
                    <Mood className='social-icon' /> Activity
                  </span>
                  {/* <span className='social-btn px-3'>
                      <Send className='social-icon' /> Send
                    </span> */}
                </div>

                {modalOpen && <Modal setOpenModal={setModalOpen} />}
              </div>
            </div>

            <div className='card-content'>
              <SocialDisplay socket={socket} />
            </div>
          </div>

          <div className='col-lg-3'>
            <div className='list-group social navigation mt-3'>
              <SocialFriends />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
