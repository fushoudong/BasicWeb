import {request} from '../libs/requset'
export function doRegister(params) {
 return request({
   url: '/api/register',
   method: 'POST',
   params
 })
}