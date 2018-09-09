import React from 'react';

function ProfileTab (props) {

  const { authedUser } = props;

  return (
    <p className='user-login'>Welcome <span className='user-login'>{authedUser}</span>!</p>
  )
}

export default ProfileTab
