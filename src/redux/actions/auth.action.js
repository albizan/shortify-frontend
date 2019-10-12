import { USER_LOGS_IN, USER_LOGS_OUT } from '../types'

export function onLogin(user) {
  return {
    type: USER_LOGS_IN,
    payload: user
  }
}

export function onLogout() {
  return {
    type: USER_LOGS_OUT,
    payload: null
  }
}
