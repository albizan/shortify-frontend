import { USER_LOGS_IN, USER_LOGS_OUT } from '../types'
import { saveAccessToken, deleteAccessToken } from '../../helpers'

const INITIAL_AUTH_STATE = {
  isLoggedIn: false,
  accessToken: null
}

export function authReducer(authState = INITIAL_AUTH_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case USER_LOGS_IN:
      saveAccessToken(payload)
      return {
        ...authState,
        isLoggedIn: true,
        accessToken: payload
      }
    case USER_LOGS_OUT:
      deleteAccessToken()
      return {
        ...authState,
        isLoggedIn: false,
        accessToken: null
      }
    default:
      return authState
  }
}
