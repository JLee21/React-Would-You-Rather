export const GET_USERS = 'GET_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'


export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}

export function addQuestionToUser (question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  }
}
