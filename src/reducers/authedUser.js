import SET_AUTHEDUSER_ID from '../actions/tweets'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHEDUSER_ID:
            return action.id
        default:
            return state
    }
}