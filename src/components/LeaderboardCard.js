import React from 'react';
// import cssModule from 'react-css-modules';
// import styles from './LeaderboardCard.css';

class LeaderboardCard extends React.Component {

  getScore () {
    const { answers, questions } = this.props.user;

    return Object.keys(answers).length + questions.length
  }

  render () {
    const { user } = this.props;

    return (
      <div className='LeaderboardCard'>
        <img
          className='avatar'
          src={user.avatarURL}
        />
        <h3>Score: {this.getScore()}</h3>
      </div>
    )
  }
}

export default LeaderboardCard
