import React, { Component } from 'react'

/*
What would be the point of seeing answered and unanswered polling
questions if we couldn’t actually vote or see the results?
Each polling question should link to the details of that poll.
The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.
 */


class NewQuestion extends Component {

  render () {
    return (
      <p>Meow</p>
    )
  }

}

export default NewQuestion
