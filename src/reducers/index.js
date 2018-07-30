import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authedUser from './authedUser'

/*
We have to pass the Root Reducer to our createStore()
function in order for the store to know what pieces of state it should have.
 */
export default combineReducers({
  users,
  questions,
  authedUser
})
