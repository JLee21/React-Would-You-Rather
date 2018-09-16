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

    return (
      <div>
        {userIDSorted.map(userID => (
          <LeaderboardCard key={userID} user={users[userID]} />
        ))}
      </div>
    )
  }
}

function getCombined (user) {
  // Return sum of number of questions asked and questions answered.
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
