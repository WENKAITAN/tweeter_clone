export const RECEIVE_USERS = "RECEIVE_USERS"

export default function handleUsersAction(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}