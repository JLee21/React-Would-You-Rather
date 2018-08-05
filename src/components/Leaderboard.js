import React, { Component } from 'react';
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

/*

  We wil need all users from the store.
  Each user will be delivered to its own LeaderboardCard.

 */

class Leaderboard extends Component {
  render () {
    const { users, userIDSorted } = this.props;
    console.log(users);

    return (
      <div>
        {users && userIDSorted.map(userID => (
          <LeaderboardCard user={users[userID]} />
        ))}
      </div>
    )
  }
}

function getCombined (user) {
  let questionCount = user.questions.length;
  let answerCount = Object.keys(user.answers).length;

  return questionCount + answerCount
}

function mapStateToProps ({ users }) {

  return {
    users,
    userIDSorted: Object.keys(users)
      .sort((a, b) => getCombined(users[b]) - getCombined(users[a]))
  }
}

export default connect(mapStateToProps)(Leaderboard)
