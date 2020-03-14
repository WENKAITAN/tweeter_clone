import { getInitialData } from '../utils/api'
import handleTweetsAction from './tweets'
import handleUsersAction from './users'
import setAuthedUser from './authedUser'

const AUTHER_ID = "tylermcginnis"

export function handleInitialDataAction(){
    return dispatch => {
        return getInitialData()
        .then(({ users, tweets }) => {
            dispatch(handleUsersAction(users))
            dispatch(handleTweetsAction(tweets))
            dispatch(setAuthedUser(AUTHER_ID))
        })
    }
}