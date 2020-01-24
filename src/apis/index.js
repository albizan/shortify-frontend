import axios from 'axios'
import { retreiveAccessToken } from '../helpers'

const http = axios.create({
  baseURL: 'http://212.237.7.61/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
})

http.interceptors.request.use(reqConfig => {
  reqConfig.headers.authorization = 'Bearer ' + retreiveAccessToken()
  return reqConfig
})

export default http
