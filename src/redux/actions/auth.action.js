import { USER_LOGS_IN, USER_LOGS_OUT } from '../types'

export function onLogin(userInfo) {
  return {
    type: USER_LOGS_IN,
    payload: userInfo,
  }
}

export function onLogout() {
  return {
    type: USER_LOGS_OUT,
    payload: null,
  }
}
