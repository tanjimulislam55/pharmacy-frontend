export const UserGetStorage = (key) => {
    let data = localStorage.getItem(key)
    if (data) {
        return data
    } else {
        return false
    }
}

export const UserSetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const UserDefStorage = (key, def) => {
    if (UserGetStorage(key) === false) {
        UserSetStorage(key, def)
    }
    return JSON.parse(UserGetStorage(key))
}
