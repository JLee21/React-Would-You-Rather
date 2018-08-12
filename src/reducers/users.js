import { GET_USERS } from '../actions/users'
import { SAVE_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION :
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id)
        }
      }
    default:
      return state
  }
}
