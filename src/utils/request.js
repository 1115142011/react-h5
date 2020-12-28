import axios from 'axios'

import showToast from 'src/components/snackBar'
import {  encryptFactory} from "./encipher";


// 创建axios实例
const service = axios.create({
  timeout: 6000,
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    const token = 'expression' 
    const _iv = 'expression';
    config.headers.seq = new Date().getTime()
    config.headers.token = token
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json'
    if(!config.headers?.noencrypt){
      config.data=  {
        data: encryptFactory(config.data, token, _iv)||null
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const code = response?.data?.code
    // const errorCode = response?.data?.errorCode
    if (code!=='000000'&&code!=='103001') {
      showToast({ msg: response.data.msg })
    }
    if(code==='100004'){
      localStorage.removeItem('currentToken')
    }

    return response.data
  },
  (error) => {
    const response = error.response
    // 根据返回的http状态码做不同的处理
    switch (response?.status) {
      case 401:
        // token失效
        break
      case 403:
        // 没有权限
        break
      case 500:
        // 服务端错误
        break
      case 503:
        // 服务端错误
        break
      default:
        break
    }
    showToast({ msg: error.message })
    // eslint-disable-next-line
    return Promise.reject(response || { message: error.message })
  }
)

export default service
