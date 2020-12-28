import React, { useState, useEffect } from 'react'
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  CardContent,
  SwipeableDrawer,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import { connect } from 'react-redux'
import TopBar from 'src/components/topBar'
import { makeStyles } from '@material-ui/core/styles'
import { queryPropinfo } from 'src/api'

interface BankMsg {
  bank?: string
  bankAccount?: string
  bankAccountName?: string
  propId?: string
  tlBankBindFlag?: string
  cardId?: string
}

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
  topHint: {
    height: 50,
    borderRadius: 8,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#797979',
  },
  border: {
    borderTop: 'solid 1px #EEEEEE',
  },
})

const UserBankCard = (props) => {
  const { history, GlobalModel } = props
  const { propId, tlAuthFlag } = GlobalModel.userInfo
  const classes = useStyle()
  const [showDrawer, changeshowDrawer] = useState<boolean>(false)
  const [bankInfo, setBankInfo] = useState<BankMsg>(null)
  const toBindCard = () => {
    history.push('/add-bank-card')
  }
  useEffect(() => {
    if (!tlAuthFlag) return
    queryPropinfo({ propId }).then((res) => {
      if (res.code === '000000') {
        setBankInfo(res.data)
      }
    })
  }, [propId, tlAuthFlag])
  const replaceString = (str) => {
    if (!str) return '----'
    const length = str.length
    const temp = str.split('').map((item, index) => {
      if (4 <= index && index <= length - 5) {
        item = '*'
      }
      return item
    })
    return temp
      .join('')
      .replace(/\s/g, ' ')
      .replace(/(.{4})/g, '$1  ')
  }
  return (
    <Box className={classes.warp}>
      <TopBar title='个人中心' />

      {tlAuthFlag ? (
        <React.Fragment>
          {bankInfo ? (
            <Box margin={1}>
              <Card>
                <CardHeader
                  action={
                    <IconButton aria-label='settings' onClick={() => changeshowDrawer(true)}>
                      <MoreHoriz />
                    </IconButton>
                  }
                  title={bankInfo.bank}
                ></CardHeader>
                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                  {replaceString(bankInfo.bankAccount)}
                </CardContent>
              </Card>
            </Box>
          ) : (
            <Box margin={1} display='flex' justifyContent='center'>
              <CircularProgress color='primary' />
            </Box>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box className={classes.topHint}>您暂未绑定银行卡</Box>
          <Box paddingX={2} paddingY={2} onClick={toBindCard}>
            <Paper elevation={0} className={classes.box}>
              + 添加银行卡
            </Paper>
          </Box>
        </React.Fragment>
      )}

      <SwipeableDrawer
        anchor='bottom'
        open={showDrawer}
        onClose={() => changeshowDrawer(false)}
        onOpen={() => changeshowDrawer(true)}
      >
        <Box marginTop={2}>
          <Button fullWidth variant='text' onClick={toBindCard}>
            更换绑定
          </Button>
        </Box>
        <Box marginBottom={2} className={classes.border}>
          <Button fullWidth variant='text'>
            取消
          </Button>
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(UserBankCard)
