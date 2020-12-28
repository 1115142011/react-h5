import React, { useState, useEffect, useRef } from 'react'
import {
  TextField,
  Checkbox,
  Button,
  Box,
  Typography,
  InputAdornment,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Link,
} from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Login, getMobileCode, queryProprietorInfo } from 'src/api'
import styles from './login.module.scss'
import { connect, DispatchProp } from 'react-redux'
import MD5 from 'md5'

interface MsgError {
  mobile: boolean
  phoneCode: boolean
  isAgree: boolean
}
interface FomMsg {
  mobile: string
  phoneCode: string
  isAgree: Boolean
}
type Iprops = RouteComponentProps & DispatchProp

const LoginFrom: React.FC<Iprops> = (props) => {
  const myTimeout = useRef(null)
  const { history, dispatch } = props
  const [formMsg, setFormMsg] = useState<FomMsg>({ mobile: '', phoneCode: '', isAgree: true })
  const [second, changeSecond] = useState<number>(60)
  const [errors, setErrors] = useState<MsgError>({ mobile: false, phoneCode: false, isAgree: false })

  const FormValidator = (value: string, key: string) => {
    switch (key) {
      case 'mobile':
        return /^1[3456789]\d{9}$/.test(value)
      case 'phoneCode':
        return value.length === 6
      case 'isAgree':
        return value
      default:
        return false
    }
  }
  const allValidation = () => {
    const tempState = []
    for (let key in formMsg) {
      let state = FormValidator(formMsg[key], key)
      tempState.push(state)
      setErrors((prevState) => {
        return { ...prevState, [key]: !state }
      })
    }
    return tempState.every((item) => item)
  }
  const change = (key: string, e) => {
    const value = key === 'isAgree' ? e.target.checked : e.target.value
    setFormMsg({
      ...formMsg,
      [key]: value,
    })
  }
  useEffect(() => {
    return () => {
      clearTimeout(myTimeout.current)
    }
  }, [])
  const timer = (value: number) => {
    if (value < 0) return
    changeSecond((prev) => {
      if (prev === 0) {
        return 60
      } else {
        return prev - 1
      }
    })
    myTimeout.current = setTimeout(() => {
      timer(value - 1)
    }, 1000)
  }
  const getPhoneCode = () => {
    const inputStatus = FormValidator(formMsg.mobile, 'mobile')
    if (!inputStatus) {
      setErrors({
        ...errors,
        mobile: true,
      })
    } else {
      setErrors({
        ...errors,
        mobile: false,
      })
      timer(60)
      const param = {
        mobile: formMsg.mobile,
        tid:localStorage.getItem('tid'),
        sign: MD5(`hrms${formMsg.mobile}`),
      }
      getMobileCode(param)
    }
  }
  const readProtocol = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    history.push('/protocol')
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    const result = allValidation()
    if (result) {
      const param = {
        account: formMsg.mobile,
        secret: formMsg.phoneCode,
        openId: localStorage.getItem('userKey'),
        tid: localStorage.getItem('tid'),
      }
      Login(param).then((res) => {
        const { data } = res
        if (res.code === '000000') {
          localStorage.setItem('currentToken', data.token.token)
          localStorage.setItem('passwordKey', data.token.iv)
          if (data?.accountInfo?.propId) {
            localStorage.setItem('userFlag', data.accountInfo.propId)
            queryProprietorInfo({ propId: data.accountInfo.propId }).then((res) => {
              if (res.code === '000000') {
                dispatch({
                  type: 'updateUserinfo',
                  payload: res.data,
                })
                history.replace(`${res.data?.tlAuthFlag ? '/home' : '/add-bank-card'}`)
              }
            })
          } else {
            history.replace('/user-register')
          }
        } else {
          if (myTimeout.current) {
            clearTimeout(myTimeout.current)
            changeSecond(60)
          }
        }
      })
    }
  }

  return (
    <Box className={styles.formBox}>
      <Typography variant='h5'>
        手机快捷登录
        <Typography variant='caption' className={styles.formHint}>
          未注册过的手机号将自动创建账号
        </Typography>
      </Typography>
      <form autoComplete='off' noValidate onSubmit={submitForm}>
        <Box paddingTop={2}>
          <TextField
            name='mobile'
            label='手机号'
            value={formMsg.mobile}
            onChange={(e) => change('mobile', e)}
            fullWidth
            variant='outlined'
            error={errors.mobile}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button disabled={second < 60} onClick={getPhoneCode}>
                    {second === 60 ? '获取验证码' : `重新获取${second}`}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box paddingY={1}>
          <TextField
            name='phoneCode'
            label='请输入验证码'
            value={formMsg.phoneCode}
            error={errors.phoneCode}
            type='number'
            onChange={(e) => change('phoneCode', e)}
            fullWidth
            variant='outlined'
          />
        </Box>

        <FormControl error={errors.isAgree} fullWidth>
          <FormControlLabel
            control={<Checkbox checked={Boolean(formMsg.isAgree)} color='primary' />}
            value={formMsg.isAgree}
            onChange={(e) => change('isAgree', e)}
            label={
              <Typography variant='caption' className={styles.checkBoxLabel}>
                我已阅读并同意
                <Link component='a' color='primary' onClick={readProtocol}>
                  《像素公寓客户使用条款和隐私说明》
                </Link>
              </Typography>
            }
          />
          {errors.isAgree && <FormHelperText>请阅读并同意服务协议</FormHelperText>}
        </FormControl>

        <Box paddingY={1}>
          <Button color='secondary' size='large' type='submit' variant='contained' fullWidth onClick={submitForm}>
            登录
          </Button>
        </Box>
      </form>
    </Box>
  )
}
// export default
export default connect((GlobalModel) => GlobalModel)(withRouter(LoginFrom))
