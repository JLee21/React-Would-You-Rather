import { getInitialData } from '../utils/api'
import { getUsers } from '../actions/users'
import { storeQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

/*
    Make a API call to our "database" to get our initial data.
    These API calls are Promises and will resolve with a .then()
    Deconstruct the returned data { users, questions }

    Now, dispatch the resolved data from the API using dispatch()
 */

// Uncomment whenever developing (also the commented line below)
// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(storeQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
