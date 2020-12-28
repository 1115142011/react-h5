import React, { useState } from 'react'
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  Slide,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { Error } from '@material-ui/icons'
import styles from './register.module.scss'
import TopBar from 'src/components/topBar'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { registerUserinfo, loginOut } from 'src/api'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
interface FormData {
  name: string
  mobile: string
  idCard: string
  sex: string
}
const RegisterForm = (props) => {
  const { history, dispatch } = props
  const { handleSubmit, register, errors } = useForm<FormData>()
  const [showModel, setShowModel] = useState<boolean>(false)
  const [lastTel, setLastTel] = useState<string>('')
  const submitForm = (data) => {
    const param = {
      openId: localStorage.getItem('userKey'),
      ...data,
    }
    setLastTel(data.mobile)
    registerUserinfo(param).then((res) => {
      if (res.code === '103001') {
        setShowModel(true)
      } else if (res.code === '000000') {
        dispatch({
          type: 'updateUserinfo',
          payload: res.data,
        })
        localStorage.setItem('userFlag', res.data)
        history.push('/add-bank-card')
      }
    })
  }
  const againLogin = () => {
    loginOut().then(() => {
      localStorage.removeItem('currentToken')
      history.replace('/login')
    })
  }
  return (
    <Box className={styles.pageWrap}>
      <TopBar title='开通账户' showBack={false} />
      <Box className={styles.contentView} position='reltive'>
        <Paper elevation={1} className={styles.formWrap}>
          <Box paddingY={1} paddingX={2}>
            <Typography variant='h6' className={styles.formTips}>
              *基本信息
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(submitForm)}>
            <Box paddingY={1} paddingX={2}>
              <TextField
                error={Boolean(errors.name)}
                size='small'
                name='name'
                label='姓名'
                inputRef={register({ required: true })}
                fullWidth
                variant='outlined'
              />
            </Box>
            <Box paddingY={1} paddingX={2}>
              <FormControl size='small' component='fieldset'>
                <FormLabel component='legend'>性别</FormLabel>
                <RadioGroup row name='sex' defaultValue='0'>
                  <FormControlLabel value='0' inputRef={register} control={<Radio color='primary' />} label='男' />
                  <FormControlLabel value='1' inputRef={register} control={<Radio color='primary' />} label='女' />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box paddingY={1} paddingX={2}>
              <TextField
                size='small'
                name='idCard'
                error={Boolean(errors.idCard)}
                inputRef={register({ validate: (value) => value.length === 15 || value.length === 18 })}
                label='身份证'
                fullWidth
                variant='outlined'
              />
            </Box>

            <Box paddingY={1} paddingX={2}>
              <TextField
                size='small'
                name='mobile'
                error={Boolean(errors.mobile)}
                inputRef={register({ validate: (value) => /^1[3-9]\d{9}$/.test(value) })}
                label='手机号'
                type='number'
                fullWidth
                variant='outlined'
              />
            </Box>
          </form>
        </Paper>
        <Box paddingY={1} paddingX={2}>
          <Typography variant='caption' className={styles.formTips}>
            <Error fontSize='small' /> 请输入签约人身份证信息
          </Typography>
        </Box>
        <Box paddingX={2} marginTop={5}>
          <Button size='large' variant='contained' color='secondary' fullWidth onClick={handleSubmit(submitForm)}>
            下一步
          </Button>
        </Box>
      </Box>
      <Dialog
        open={showModel}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        onClose={() => setShowModel(false)}
      >
        <Box padding={3} className={styles.modelContent}>
          <Typography variant='h6' align='center'>
            您的证件号已注册
          </Typography>
          <Typography variant='caption' className={styles.formTips}>
            请使用尾号（{lastTel.substr(7, 4)}）手机号登录
          </Typography>
          <Button variant='contained' color='primary' fullWidth onClick={againLogin}>
            重新登录
          </Button>
        </Box>
      </Dialog>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(RegisterForm)
