import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

class LeaderboardCard extends React.Component {

  getScore () {
    const { answers, questions } = this.props.user;

    return Object.keys(answers).length + questions.length
  }

  render () {
    const { user } = this.props;
    const numAnswered = Object.keys(user.answers).length
    const numQuestion = user.questions.length

    return (
      <div className='LeaderboardCard'>
          <Grid>
            <Row>
              <Col xs={12} md={5} mdOffset={2} className="card no-gutters">
                <div className="card-head-horz">
                  <img alt='' className='avatar' src={user.avatarURL}/>
                  {user.name}
                </div>
                <br></br>
                <div className="card-body-horz">
                <Table>
                    <tbody>
                      <tr>
                        <td>Answered</td>
                        <td>{numAnswered}</td>
                      </tr>
                      <tr>
                        <td>Unanswered</td>
                        <td>{numQuestion}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="card-tail">
                    Score {numAnswered + numQuestion}
                  </div>
                </div>
              </Col>
            </Row>
        </Grid>

      </div>
    )
  }
}

export default LeaderboardCard
