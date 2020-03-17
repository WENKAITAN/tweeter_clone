export const SET_AUTHEDUSER_ID = "SET_AUTHEDUSER_ID"

export default function setAuthedUser(id){
    return {
        type: SET_AUTHEDUSER_ID,
        id
    }
}