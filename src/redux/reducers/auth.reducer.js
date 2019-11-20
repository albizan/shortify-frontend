import { USER_LOGS_IN, USER_LOGS_OUT, SET_USER } from '../types'
import { saveAccessToken, deleteAccessToken } from '../../helpers'

const INITIAL_AUTH_STATE = {
  isLoggedIn: false,
  accessToken: null,
  user: null
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
        accessToken: null,
        user: null
      }
    case SET_USER:
      return {
        ...authState,
        user: payload
      }
    default:
      return authState
  }
}
