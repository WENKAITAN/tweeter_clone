import { saveLikeToggle, saveTweet}  from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const TOGGLE_TWEETS = "TOGGLE_TWEETS"
export const ADD_TWEETS = "ADD_TWEETS"


export function addTweets(tweet){
    return{
        type: ADD_TWEETS,
        tweet
    }
}

export function handleAddTweet(text, replyingTo){
    return(dispatch, getState) => {

        dispatch(showLoading())

        return saveTweet({
             text,
             author: getState().authedUser, 
             replyingTo 
            })
            .then((tweet) => dispatch(addTweets(tweet)))
            .then(() => dispatch(hideLoading()))
    }
}
export function receiveTweets(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function toggleTweet({ id, hasLiked, authedUser }){
    return {
        type: TOGGLE_TWEETS,
        id,
        hasLiked,
        authedUser

    }
}

export function handleToggleTweet(info){
    return dispatch => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info)
        .catch( (e) => {
            console.warn('Error in handleToggleTweet:', e)
            dispatch(toggleTweet(info))
            alert('There is an error, try again!')
        })
    }
}

