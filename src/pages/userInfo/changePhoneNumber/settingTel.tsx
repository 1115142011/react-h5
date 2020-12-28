import React, { useState, useRef, useEffect } from 'react'
import { Box, TextField, Typography, Button, Paper, InputAdornment, Dialog, Slide } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'
import { TransitionProps } from '@material-ui/core/transitions'
import styles from './setting.module.scss'
import TopBar from 'src/components/topBar'
import { connect } from 'react-redux'
import { getMobileCode, updateProprietorMobile } from 'src/api'
import MD5 from 'md5'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const SettingTel = (props) => {
  const { userInfo = null } = props.GlobalModel
  const userId = userInfo?.propId || localStorage.getItem('userFlag')
  const myTimer = useRef(null)
  const { history } = props
  const [second, changeSecond] = useState<number>(60)
  const [phoneCode, changePhoneCode] = useState<string>('')
  const [mobile, changeMobile] = useState<string>('')
  const [mobileError, setMobileError] = useState<boolean>(false)
  const [phoneCodeError, setPhoneCodeError] = useState<boolean>(false)
  const [finsh, setFinsh] = useState<boolean>(false)
  useEffect(() => {
    return () => {
      clearTimeout(myTimer.current)
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
    myTimer.current = setTimeout(() => {
      timer(value - 1)
    }, 1000)
  }
  const getBankCode = () => {
    if (!mobile || !/^1[3-9]\d{9}$/.test(mobile)) {
      setMobileError(true)
      return
    } else {
      setMobileError(false)
      timer(60)
      const param = {
        mobile: mobile,
        sign: MD5(`hrms${mobile}`),
      }
      getMobileCode(param)
    }
  }
  const isError = () => {
    if (mobile && phoneCode) {
      setPhoneCodeError(false)
      setMobileError(false)
      return true
    } else {
      if (!mobile) {
        setMobileError(true)
      }
      if (!phoneCode) {
        setPhoneCodeError(true)
      }
      return false
    }
  }
  const submitForm = () => {
    const validity = isError()
    if (validity) {
      const param = {
        vcode: phoneCode,
        propId: userId,
        mobile: mobile,
      }
      updateProprietorMobile(param).then((res) => {
        if (res.code === '000000') {
          setFinsh(true)
        }
      })
    }
  }
  const closeModel = () => {
    setFinsh(false)
    localStorage.removeItem('currentToken')
    history.push('/login')
  }
  return (
    <Box className={styles.pageWrap}>
      <TopBar title='变更登陆手机号' onLeft={() => history.push('/home')} />
      <Box className={styles.contentView} position='reltive'>
        <Paper elevation={1} className={styles.formWrap}>
          <Box paddingY={1} paddingX={2}>
            <Typography variant='h6' className={styles.formTips}>
              *账号信息
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={submitForm}>
            <Box paddingY={1} paddingX={2}>
              <TextField
                size='small'
                name='prevMobile'
                label='当前手机号'
                fullWidth
                disabled
                variant='outlined'
                defaultValue={userInfo.mobile}
              />
            </Box>
            <Box paddingY={1} paddingX={2}>
              <TextField
                size='small'
                name='mobile'
                label='变更后的手机号'
                fullWidth
                variant='outlined'
                value={mobile}
                onChange={(e) => changeMobile(e.target.value)}
                error={mobileError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button size='small' disabled={second < 60} onClick={getBankCode}>
                        {second === 60 ? '获取验证码' : `重新获取${second}`}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box paddingY={1} paddingX={2}>
              <TextField
                size='small'
                name='phoneCode'
                label='验证码'
                placeholder='新手机接收'
                fullWidth
                variant='outlined'
                value={phoneCode}
                onChange={(e) => changePhoneCode(e.target.value)}
                error={phoneCodeError}
              />
            </Box>
          </form>
        </Paper>
        {/* <Box paddingY={1} paddingX={2}>
          <Typography variant='caption' className={styles.formTips}>
            <Error fontSize='small' /> 银行卡预留手机号将接收到验证码
          </Typography>
        </Box> */}
        <Box paddingX={2} marginTop={10}>
          <Button size='large' variant='contained' color='secondary' fullWidth onClick={submitForm}>
            提交
          </Button>
        </Box>
        <Dialog
          open={finsh}
          TransitionComponent={Transition}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
          onClose={closeModel}
        >
          <Box padding={3} className={styles.modelContent}>
            <Typography variant='h6' align='center' className={styles.text}>
              电话号码更换成功
              <CheckCircle className={styles.succeed} />
            </Typography>
            <Typography variant='caption' className={styles.formTips}>
              请使用尾号（{mobile.substr(7, 4)}）手机号重新登录
            </Typography>
            <Box marginTop={3}>
              <Button variant='contained' color='secondary' fullWidth onClick={closeModel}>
                确定
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(SettingTel)
