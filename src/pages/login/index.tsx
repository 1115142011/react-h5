import React, { useEffect } from 'react'
import { Box } from '@material-ui/core'
import styles from './login.module.scss'
import middleImage from 'src/assets/login/login.gif'
import top_logo from 'src/assets/login/xsgu_logo.svg'
import { queryProprietorInfo } from 'src/api'
import { connect } from 'react-redux'
import LoginForm from './LoginFrom'

type PathParam = {
  tid?: string
  openId?: string
}

const LoginIndex = (props) => {
  const { dispatch, history } = props
  const splitPath = () => {
    let path = window.location.href

    let param: PathParam = {}
    let searchParam = path.split('?')[1] ? path.split('?')[1].split('&') : []
    for (let i = 0; i < searchParam.length; i++) {
      let item = searchParam[i].split('=')
      param[item[0]] = item[1]
    }
    // 免登
    if (localStorage.getItem('currentToken') && param.tid) {
      const prevCatch = localStorage.getItem('tid')
      if (prevCatch && prevCatch === param.tid) {
        const userId = localStorage.getItem('userFlag')
        if (userId) {
          queryProprietorInfo({ propId: userId }).then((res) => {
            if (res.code === '000000') {
              dispatch({
                type: 'updateUserinfo',
                payload: res.data,
              })

              history.replace(`${res.data?.tlAuthFlag ? '/home' : '/add-bank-card'}`)
            }
          })
        }
      } else {
        localStorage.removeItem('currentToken')
      }
    }
    // 更新缓存
    if (Object.keys(param).length > 0) {
      localStorage.setItem('userKey', param.openId)
      localStorage.setItem('tid', param.tid)
    }
  }
  useEffect(() => {
    splitPath()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])
  return (
    <Box className={styles.pageWrap}>
      <Box className={styles.topBox}>
        <img src={top_logo} className={styles.logo} alt='logo' />
        <img src={middleImage} className={styles.middleImage} alt='图片' />
      </Box>
      <Box className={styles.bottomBox}>
        <LoginForm />
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(LoginIndex)
