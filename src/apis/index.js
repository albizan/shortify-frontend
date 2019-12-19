import axios from 'axios'
import { retreiveAccessToken } from '../helpers'

const http = axios.create()

http.defaults.baseURL = 'http://shorter-test.herokuapp.com'
http.defaults.timeout = 7000

http.interceptors.request.use(reqConfig => {
  reqConfig.headers.authorization = 'Bearer ' + retreiveAccessToken()
  return reqConfig
})

export default http
