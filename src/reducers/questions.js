import {
  SAVE_QUESTION,
  STORE_QUESTIONS
} from '../actions/questions'

/*
  Redux maps the parameters passed to the dispatch action
  functions to state, and action.
 */
export default function questions (state = {}, action) {
  switch (action.type) {
    case SAVE_QUESTION :
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      }
    case STORE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}
