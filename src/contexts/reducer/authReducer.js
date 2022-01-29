import { UserDefStorage, UserGetStorage, UserSetStorage } from '../storage/storage'

export const authState = UserDefStorage('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            UserSetStorage('auth', { auth: true, token: state.token })
            return JSON.parse(UserGetStorage('auth'))
        case 'token':
            UserSetStorage('auth', { auth: true, token: action.payload })
            return JSON.parse(UserGetStorage('auth'))
        case 'remove':
            UserSetStorage('auth', { auth: false, token: '' })
            return JSON.parse(UserGetStorage('auth'))
        default:
            return state
    }
}
