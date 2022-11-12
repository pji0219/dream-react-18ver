import React from 'react';

function Avatar({ image, lookie }) {
  return (
    <div className='avatar'>
      {lookie && <div className='lookie'>New</div>}
      <img className='photo' src={image} alt='avatar' />
    </div>
  );
}

export default Avatar;
