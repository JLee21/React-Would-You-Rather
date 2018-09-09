import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Grid, Row, Col, Button, FieldGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/*
It would be no fun to vote in polls if we couldn’t post our own questions!
The form for posting new polling questions should be available at the
/add route. The application should show the text “Would You Rather”
and have a form for creating two options. Upon submitting the form,
a new poll should be created, the user should be taken to the home page,
and the new polling question should appear in the correct category on the
home page.
 */

class NewQuestion extends Component {

  state = {
    toHome: false,
    optionOneText: 'asadf',
    optionTwoText: 'qwer'
  }
  clearUserInput = () => {
    this.setState(() => {
      optionOneText: ''
      optionTwoText: ''
      toHome: true
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    // // Question object schema comes from _DATA.js formatQuestion
    const question = {
      optionOneText,
      optionTwoText,
      author: authedUser
    }
    this.clearUserInput()
    this.state = {
      toHome: true
    }
    dispatch(handleAddQuestion(question))
  }
  handleChange = (e) => {
    e.preventDefault()

    const { id, value } = e.target;

    id === 'optionOne'
      ? this.setState({
        optionOneText: value
      })
      : this.setState({
        optionTwoText: value
      })
  }

  render () {
    const { optionOneText, optionTwoText } = this.state

    return (
      <Grid>
        <Row className="show-grid justify-content-center text-center">
          <Col xs={12} md={5}>
            <div>
              <h3 className='text-center'>Compose A New Question</h3>
              <form className='' onSubmit={this.handleSubmit}>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    id='optionOne'
                    componentClass="textarea"
                    placeholder="Enter Option One Here..."
                    value={optionOneText}
                    onChange={this.handleChange}
                    maxLength={280}
                  />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    id='optionTwo'
                    placeholder="Enter Option Two Here..."
                    value={optionTwoText}
                    onChange={this.handleChange}
                    maxLength={280}
                  />
                </FormGroup>
                <Button
                  bsStyle="primary"
                  type='submit'
                  disabled={(optionTwoText === '') && (optionTwoText === '')}
                  block>
                  SUBMIT
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion)
