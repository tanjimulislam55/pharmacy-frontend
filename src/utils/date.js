let date = new Date()

//curent time
export const time = `${6 + date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

//today's date
export const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

//firstday and lastday of current month
let fDay = new Date(date.getFullYear(), date.getMonth(), 2).toISOString()
let lDay = new Date(date.getFullYear(), date.getMonth() + 1, 1).toISOString()
export const firstDay = fDay.slice(0, 10)
export const lastDay = lDay.slice(0, 10)
