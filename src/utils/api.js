import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

/*
  Execute multiple Promise objects using .all
  Once all have resolved, implicit return a object literal shorthand.
 */
export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
        users,
        questions
      })
    )
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveAnswer (answer) {
  /*
    authedUser,
    qid,
    answer: "optionOne" or "optionTwo"
   */
  return _saveQuestionAnswer(answer)
}

export function getQuestions () {
  return _getQuestions()
}
