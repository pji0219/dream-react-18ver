import React from 'react';

export default function Avatar({ isBest, url }) {
  return (
    <div className='avatar'>
      {isBest && <div className='best'>최애</div>}
      <img className='photo' src={url} alt='avatar' />
    </div>
  );
}
