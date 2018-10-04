import {
  SAVE_QUESTION,
  STORE_QUESTIONS,
  SAVE_ANSWER
} from '../actions/questions'

/*
  Redux maps the parameters passed to the dispatch action
  functions to state, and action.
 */
export default function questions (state = {}, action) {
  switch (action.type) {

    /*
      Add the question object to questions.
      And push the question ID onto that user's question array.
     */
    case SAVE_QUESTION :
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      }

    case SAVE_ANSWER :
      const { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
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
