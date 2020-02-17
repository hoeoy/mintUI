import axios from 'axios'
import store from '@/store'
import { MessageBox ,Toast} from 'mint-ui';

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8080/sample',
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(request => {
    request.headers['Access-Control-Allow-Origin'] = '*'
    if (store.getters.token) {
      var tmpToken = store.getters.token
      request.headers['Authorization'] = 'Bearer ' + tmpToken.access_token
    }
    return request
  },
  error => {
    // 请求发生错误
    console.log('request interceptor error') // for debug
    Promise.reject(error)
  }
)
// {
//   code: 1, //1：正确结果，2：回话过期，3：非法回话，4：权限不足，5：未知错误
//   message: 后端错误信息
//   data: 后端正常处理结果封装
// }
// response interceptor
service.interceptors.response.use(
  response => {
    debugger
    const res = response.data
    if (res.code !== 1) {
      if (res.code === 2 || res.code === 3) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      console.log('response interceptor: fail') // for debug
      if (res.message) {
        Toast({
          message: res.message,
          position: 'bottom',
          duration: 3000
        });
      }
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('response interceptor error'+error) // for debug
    Toast({
      message: error.message,
      position: 'bottom',
      duration: 3000
    });
    return Promise.reject(error)
  }
)

export default service
