import {
  REGISTRATION_COMPLETED,
  REGISTRATION_FAILED,
  LOGIN_COMPLETED,
  LOGIN_FAILED
} from '../types'

const INITIAL_FORM_STATE = {
  isSuccesful: false,
  message: ''
}

export function formReducer(formState = INITIAL_FORM_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case REGISTRATION_COMPLETED:
      return {
        isSuccesful: true,
        message: payload
      }
    case REGISTRATION_FAILED:
      return {
        isSuccesful: false,
        message: payload
      }
    case LOGIN_COMPLETED:
      return {
        isSuccesful: true,
        message: payload
      }
    case LOGIN_FAILED:
      return {
        isSuccesful: false,
        message: payload
      }
    default:
      return formState
  }
}
