export const RECEIVE_TWEETS = "RECEIVE_TWEETS"

export default function handleTweetsAction(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets
    }
}