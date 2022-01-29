import { UserDefStorage, UserGetStorage, UserSetStorage } from '../storage/storage'

export const userState = UserDefStorage('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            UserSetStorage('user', { info: state.info })
            return JSON.parse(UserGetStorage('user'))
        case 'set':
            UserSetStorage('user', { info: action.payload })
            return JSON.parse(UserGetStorage('user'))
        case 'remove':
            UserSetStorage('user', { info: {} })
            return JSON.parse(UserGetStorage('user'))
        default:
            return state
    }
}
