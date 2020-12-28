import React from 'react'
import { Box, Paper } from '@material-ui/core'
import TopBar from 'src/components/topBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  warp: {
    height: '100vh',
    background: '#eeeeee',
  },
  box: {
    background: '#ffffff',
    height: 50,
    borderRadius: 8,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
  },
})

const UserCenter = (props) => {
  const { history } = props
  const classes = useStyle()
  const toUserBankCard = () => {
    history.push('/user-bank-card')
  }
  const toChangeMobile = () => {
    history.push('/setting-tel')
  }
  return (
    <Box className={classes.warp}>
      <TopBar title='个人中心' />
      <Box paddingX={2} paddingY={2}>
        <Paper elevation={0} className={classes.box} onClick={toUserBankCard}>
          我的银行卡
        </Paper>
      </Box>
      <Box paddingX={2}>
        <Paper elevation={0} className={classes.box} onClick={toChangeMobile}>
          更换电话号码
        </Paper>
      </Box>
    </Box>
  )
}

export default UserCenter
