import {
  saveQuestion
} from '../utils/api'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const STORE_QUESTIONS = 'STORE_QUESTIONS'

function addQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}
export function handleAddQuestion (question) {
  // B/c this action will by asynchronous, we'll need to wrap itself as a function
  // reather than just dispatching it with dispatch(handleAddTweet())

  // I.e., when a component adds a new question,
  // it will do disptach(addQuestion(question)).
  // Then, we'll arive at this function. The function dispatch will be passed in
  // as a argument so we can have access to it later b/c this handling function
  // is asynchronous.
  return (dispatch, getState) => {

    // This part actually executes the API function saveQuestion and THEN
    // dispatches the change to the store.
    return saveQuestion(
      question
    )
      .then((question) => {
        dispatch(addQuestion(question))
      })
  }
}
export function storeQuestions (questions) {
  return {
    type: STORE_QUESTIONS,
    questions
  }
}
