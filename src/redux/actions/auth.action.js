import { USER_LOGS_IN, USER_LOGS_OUT } from '../types'

export function setLogin(user) {
  return {
    type: USER_LOGS_IN,
    payload: user,
  }
}

export function setLogout() {
  return {
    type: USER_LOGS_OUT,
    payload: null,
  }
}
