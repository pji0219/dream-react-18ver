import React from 'react';
import Avatar from './Avatar';

function Profile({ image, name, title, lookie }) {
  return (
    <div className='profile'>
      <Avatar image={image} lookie={lookie} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Profile;
