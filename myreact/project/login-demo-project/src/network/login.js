import {request} from '../libs/requset'
export function doLogin(params) {
 return request({
   url: '/api/login',
   method: 'POST',
   params
 })
}