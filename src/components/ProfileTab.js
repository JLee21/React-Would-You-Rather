import React from 'react';

function ProfileTab (props) {

  const { authedUser } = props;

  return (
    <p>Welcome {authedUser}!</p>
  )
}

export default ProfileTab
