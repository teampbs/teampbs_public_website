
const day = new Date(Date.now()).getDate()
const month = new Date(Date.now()).getMonth()
const year = new Date(Date.now()).getFullYear()

const addZero = num => num.toString().length === 1 ? `0${num}` : num

export const formatDate = `${addZero(day)}/${addZero(month)}/${year}`