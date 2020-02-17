import request from '../utils/request'

export function captcha(data) {
  return request({
    url: '/captcha',
    method: 'get'
  })
}

export function loginByUsername(data) {
  return request({
    url: '/',
    method: 'get'
    //,data
  })
}

export function getUserInfo() {
  return request({
    url: '/user-details',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}

