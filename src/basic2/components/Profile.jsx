import React from 'react';
import Avatar from './Avatar';

export default function Profile({ url, name, position, isBest }) {
  return (
    <div className='profile'>
      <Avatar url={url} isBest={isBest} />
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}
