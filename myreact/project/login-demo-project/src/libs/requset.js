import axios from 'axios'
export function request(config) {
  const fetch = axios.create({
    baseURL: '',
    timeout: 5000
  })
  fetch.interceptors.request.use(config => {
    return config
  }, error => {
    return new Promise.reject(error)
  })
  fetch.interceptors.response.use(data => {
    return data.data
  }, error => {
    return new Promise.reject(error)
  })
  return fetch(config)
}