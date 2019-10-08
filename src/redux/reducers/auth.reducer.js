import { USER_LOGS_IN, USER_LOGS_OUT } from '../types'

const INITIAL_AUTH_STATE = {
  isLoggedIn: false,
  user: null,
}

export function authReducer(authState = INITIAL_AUTH_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case USER_LOGS_IN:
      return {
        ...authState,
        isLoggedIn: true,
        user: payload.user,
      }
    case USER_LOGS_OUT:
      return {
        ...authState,
        isLoggedIn: false,
        user: null,
      }
    default:
      return authState
  }
}
