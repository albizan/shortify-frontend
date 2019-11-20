import { USER_LOGS_IN, USER_LOGS_OUT, SET_USER } from '../types'

export function onLogin(accessToken) {
  return {
    type: USER_LOGS_IN,
    payload: accessToken
  }
}

export function onLogout() {
  return {
    type: USER_LOGS_OUT,
    payload: null
  }
}
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}
