import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button, Paper, Dialog, Slide, CircularProgress } from '@material-ui/core'
import { Error, CheckCircle } from '@material-ui/icons'
import { TransitionProps } from '@material-ui/core/transitions'
import { connect } from 'react-redux'
import styles from './bindBankCard.module.scss'
import TopBar from 'src/components/topBar'
import { useForm } from 'react-hook-form'
import { bindBankCard, tonglianRegisterBank, tonglianRegisterBankConfirm, tonglianRegisterBankSign } from 'src/api'

interface formData {
  bank?: string //开户行
  bankAccount?: string // 卡号
  bankAccountName?: string // 开户人
  idCard?: string // 持卡人身份证号
  mobile?: string // 持卡人电话
}
interface cardMsg {
  authFlag?: number
  name?: number
  propId?: string
  tlAuthFlag?: number
  tlBankBindFlag?: number
  trustFlag?: number
  cardId?: string
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const AddBankCard = (props) => {
  const { history, GlobalModel } = props
  const { userInfo = null } = GlobalModel
  const { tlAuthFlag = 0, tlBankBindFlag } = userInfo
  const userId = GlobalModel.userInfo.propId || localStorage.getItem('userFlag')
  const [phoneCode, changePhoneCode] = useState<string>('')
  const [phoneCodeError, setPhoneCodeError] = useState<boolean>(false)
  const [needMobileCode, setNeedMobileCode] = useState<boolean>(false)
  const [requestStatus, setRequestStatus] = useState<boolean>(false)
  const [showModel, setShowModel] = useState<boolean>(false)
  const { handleSubmit, register, errors } = useForm<formData>()
  const [tempCard, setTempCard] = useState<cardMsg>(null)
  // 通联签约授权
  const singBankCard = (propId) => {
    const param = {
      returnUrl: `${window.location.protocol}//${window.location.host}/hproprietor/#/home`,
      propId,
    }
    tonglianRegisterBankSign(param).then((result) => {
      if (result.code === '000000') {
        window.open(result.data)
      }
    })
  }
  useEffect(() => {
    if (!tlAuthFlag && tlBankBindFlag && userId) {
      singBankCard(userId)
    }
  }, [tlAuthFlag, tlBankBindFlag, userId])
  // 通联注册银行卡确认
  const tonglianConfirm = (propId, phoneCode, cardId) => {
    setRequestStatus(true)
    const param = {
      propId,
      cardId,
      vcode: phoneCode,
    }
    tonglianRegisterBankConfirm(param)
      .then((res) => {
        setRequestStatus(false)
        if (res.code === '000000') {
          if (userInfo?.tlAuthFlag) {
            setShowModel(true)
          } else {
            singBankCard(propId)
          }
        }
      })
      .catch(() => {
        setRequestStatus(false)
      })
  }
  // 通联注册银行卡
  const tonglianaddCard = (propId, cardId) => {
    tonglianRegisterBank({ propId, cardId })
      .then((result) => {
        setRequestStatus(false)
        if (result.code === '000000') {
          setNeedMobileCode(true)
        }
      })
      .catch(() => {
        setRequestStatus(false)
      })
  }
  // 像素系统添加银行卡信息
  const addBankMsg = (data) => {
    if (data) {
      const param = {
        ...data,
        propId: userId,
      }
      bindBankCard(param).then((res) => {
        setNeedMobileCode(true)
        if (res.code === '000000') {
          const resCardData: cardMsg = res.data
          setTempCard(resCardData)
          if (resCardData.tlBankBindFlag && userInfo?.tlAuthFlag) {
            // 绑卡成功--通联注册过--有过签约
            setShowModel(true)
            setNeedMobileCode(false)
          } else if (resCardData.tlBankBindFlag) {
            // 通联注册过--没有签约授权
            singBankCard(userId)
          } else {
            // 未在通联注册过--有/无签约授权
            tonglianaddCard(userId, resCardData.cardId)
          }
        }
      })
    }
  }
  // 验证码确认
  const submitForm = () => {
    if (phoneCode && phoneCode.length === 6) {
      setPhoneCodeError(false)
      tonglianConfirm(userId, phoneCode, tempCard.cardId)
    } else {
      setPhoneCodeError(true)
    }
  }
  const back = () => {
    history.push('/home')
  }

  return (
    <Box className={styles.pageWrap}>
      <TopBar title='绑定银行卡' onLeft={() => history.push('/home')} />
      <Box className={styles.contentView} position='reltive'>
        <Paper elevation={1} className={styles.formWrap}>
          <Box paddingY={1} paddingX={2}>
            <Typography variant='h6' className={styles.formTips}>
              *银行卡信息
            </Typography>
          </Box>
          {needMobileCode ? (
            <React.Fragment>
              <Box paddingY={1} paddingX={2}>
                <TextField
                  size='small'
                  name='phoneCode'
                  label='验证码'
                  placeholder='收到的验证码'
                  fullWidth
                  variant='outlined'
                  value={phoneCode}
                  onChange={(e) => changePhoneCode(e.target.value)}
                  error={phoneCodeError}
                />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form noValidate autoComplete='off' onSubmit={handleSubmit(addBankMsg)}>
                <Box paddingY={1} paddingX={2}>
                  <TextField
                    error={Boolean(errors.bank)}
                    size='small'
                    name='bank'
                    label='开户行'
                    placeholder='建设银行'
                    inputRef={register({ required: true })}
                    fullWidth
                    variant='outlined'
                  />
                </Box>
                <Box paddingY={1} paddingX={2}>
                  <TextField
                    size='small'
                    name='bankAccount'
                    error={Boolean(errors.bankAccount)}
                    inputRef={register({ required: true })}
                    label='银行卡号'
                    placeholder='6241 xxxx'
                    fullWidth
                    variant='outlined'
                  />
                </Box>
                <Box paddingY={1} paddingX={2}>
                  <TextField
                    size='small'
                    name='bankAccountName'
                    error={Boolean(errors.bankAccountName)}
                    inputRef={register({ required: true })}
                    label='持卡人姓名'
                    placeholder='x先生'
                    fullWidth
                    variant='outlined'
                  />
                </Box>
                <Box paddingY={1} paddingX={2}>
                  <TextField
                    size='small'
                    name='idCard'
                    error={Boolean(errors.idCard)}
                    inputRef={register({ validate: (value) => value.length === 15 || value.length === 18 })}
                    label='持卡人身份证号'
                    placeholder='身份证号'
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
                    label='持卡人手机号'
                    placeholder='银行卡预留手机'
                    fullWidth
                    variant='outlined'
                  />
                </Box>
              </form>
            </React.Fragment>
          )}
        </Paper>
        <Box paddingY={1} paddingX={2}>
          <Typography variant='caption' className={styles.formTips}>
            <Error fontSize='small' /> 银行卡预留手机号将接收到验证码
          </Typography>
        </Box>
        {needMobileCode ? (
          <React.Fragment>
            <Box paddingX={2} marginTop={3}>
              <Button size='large' variant='contained' color='secondary' fullWidth onClick={submitForm}>
                提交
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box paddingX={2} marginTop={3}>
              <Button
                size='large'
                variant='contained'
                disabled={requestStatus}
                color='secondary'
                fullWidth
                onClick={handleSubmit(addBankMsg)}
              >
                {requestStatus ? <CircularProgress /> : '下一步'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <Dialog
        open={showModel}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        onClose={() => setShowModel(false)}
      >
        <Box padding={3} className={styles.modelContent}>
          <Typography variant='h6' align='center' className={styles.text}>
            银行卡添加成功
            <CheckCircle className={styles.succeed} />
          </Typography>

          <Button variant='contained' color='secondary' fullWidth onClick={back}>
            返回主页
          </Button>
        </Box>
      </Dialog>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(AddBankCard)
