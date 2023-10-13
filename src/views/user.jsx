import React from 'react';
import { Profile } from './userprofile';

export const User = () => {
    const user ='gues';
  return (
    <div>
      {user === 'guest' ? (
        <h1>Content is disabled for guests.</h1>
      ) : (
        <Profile/>
      )}
    </div>
  );
};

