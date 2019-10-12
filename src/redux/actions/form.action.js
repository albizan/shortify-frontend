import {
  REGISTRATION_COMPLETED,
  REGISTRATION_FAILED,
  LOGIN_COMPLETED,
  LOGIN_FAILED
} from '../types'

export function onRegistrationCompleted(message = 'Success') {
  return {
    type: REGISTRATION_COMPLETED,
    payload: message
  }
}

export function onRegistrationFailed(message = 'An Error Occurred') {
  return {
    type: REGISTRATION_FAILED,
    payload: message
  }
}

export function onLoginCompleted(message = 'Success') {
  return {
    type: LOGIN_COMPLETED,
    payload: message
  }
}

export function onLoginFailed(message = 'An Error Occurred') {
  return {
    type: LOGIN_FAILED,
    payload: message
  }
}
