import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import tweets from './tweets'

export default combineReducers({
    users,
    tweets,
    authedUser
})