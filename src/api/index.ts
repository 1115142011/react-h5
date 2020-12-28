import request from 'src/utils/request'

/*
 * 获取验证码
 */
export function getMobileCode(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
    headers: {
      noencrypt: new Date().getTime(),
    },
  })
}
/*
 * 登录
 */
export function Login(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
    headers: {
      noencrypt: new Date().getTime(),
    },
  })
}
/*
 * x
 */
export function registerUserinfo(param) {
  return request({
    url: 'xxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function loginOut() {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
  })
}
/*
 * x
 */
export function queryPropinfo(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function bindBankCard(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function tonglianRegisterBank(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function tonglianRegisterBankConfirm(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function tonglianRegisterBankSign(param) {
  return request({
    url: 'xxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function queryProprietorInfo(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
/*
 * x
 */
export function updateProprietorMobile(param) {
  return request({
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    method: 'POST',
    data: param,
  })
}
