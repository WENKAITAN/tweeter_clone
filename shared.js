import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import receiveUsers from './users'
import setAuthedUser from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHER_ID = "tylermcginnis"

export function handleInitialDataAction(){
    return dispatch => {
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, tweets }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHER_ID))
            dispatch(hideLoading())
        })
    }
}