import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <img src={user.avatar} alt="User Avatar" style={{ borderRadius: '50%' }} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;
