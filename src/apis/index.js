import axios from 'axios'
import { retreiveAccessToken } from '../helpers'

const http = axios.create({
  baseURL: 'https://shortify-apis.albertozanotti.it',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  }
})

http.interceptors.request.use(reqConfig => {
  reqConfig.headers.authorization = 'Bearer ' + retreiveAccessToken()
  return reqConfig
})

export default http
