import axios from 'axios'
import { retreiveAccessToken } from '../helpers'

const http = axios.create()

http.defaults.baseURL = 'http://localhost:8080'
http.defaults.timeout = 7000

http.interceptors.request.use(reqConfig => {
  reqConfig.headers.authorization = 'Bearer ' + retreiveAccessToken()
  return reqConfig
})

export default http
