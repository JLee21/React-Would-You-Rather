import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab, Grid, Col, Row } from 'react-bootstrap'
import QuestionContainer from './QuestionContainer'

/*
Once the user logs in, the user should be able to toggle between
his/her answered and unanswered polls on the home page, which is
located at the root. The polls in both categories are arranged from
the most recently created (top) to the least recently created (bottom).
The unanswered questions should be shown by default, and the name
of the logged in user should be visible on the page.

Based on the authedUser, get that users answered and unanswered questions.
Both in a list of question IDs.
Pass these lists to QuestionCol component.
*/

class Dashboard extends Component {
  state = {
    showAnswered: false,
  }

  handleAnsweredToggle = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered
    }))
  }

  render () {
    const { answeredSortedIds, unansweredSortedIds } = this.props;
    const { showAnswered } = this.state;

    return (
      <Grid>
        <Row className="show-grid justify-content-center">
          <Col xs={12} md={8} mdOffset={2}>
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Answered">
                <div>
                  <QuestionContainer questions={answeredSortedIds}/>
                </div>
              </Tab>
              <Tab eventKey={2} title="Unanswered">
                <div>
                  <QuestionContainer questions={unansweredSortedIds}/>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {

  // Answered questions, timestamp sorted
  const answered = Object.keys(users[authedUser].answers)
  const answeredSortedIds = answered.sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  // Unanswered questions, timestamp sorted
  const questionIDs = Object.keys(questions)
  const unanswered = questionIDs.filter((id) => -1 == answered.indexOf(id))
  const unansweredSortedIds = unanswered.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  console.log('Dashboard');
  return {
    answeredSortedIds,
    unansweredSortedIds
  }
}

export default connect(mapStateToProps)(Dashboard)
