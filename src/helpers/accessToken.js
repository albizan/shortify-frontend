export function saveAccessToken(accessToken) {
  localStorage.setItem('accessToken', accessToken)
}
export function retreiveAccessToken() {
  return localStorage.getItem('accessToken') || ''
}
export function deleteAccessToken() {
  localStorage.removeItem('accessToken')
}
