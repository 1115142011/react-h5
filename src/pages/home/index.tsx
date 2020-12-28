import React, { useEffect } from 'react'
import { Box, IconButton, CircularProgress } from '@material-ui/core'
import { HeadsetMicRounded, PermIdentity } from '@material-ui/icons'
import styles from './home.module.scss'
import top_bg from 'src/assets/home/header_background.svg'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import HeaderPic from 'src/components/headerPicture/index'
import SeverrCard from './children/serverCard/severrCard'
import CarouselCard from './children/carousel'
import PartnerCard from './children/partnerCard'
import { queryProprietorInfo } from 'src/api'

const useStyles = makeStyles({
  iconBtn: {
    background: '#F4A318',
    color: '#ffffff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)',
    border: 'solid 1px #AB7211',
    pading: 0,
    marginRight: 10,
    '&:hover': {
      backgroundColor: '#F4A318',
    },
  },
})

const Home = (props) => {
  const { history, dispatch, GlobalModel } = props
  const userInfomation = GlobalModel.userInfo
  const id = userInfomation?.propId || localStorage.getItem('userFlag')
  const classes = useStyles()
  const toUserCenter = () => {
    history.push('/user-center')
  }
  useEffect(() => {
    queryProprietorInfo({ propId: id }).then((res) => {
      if (res.code === '000000') {
        dispatch({
          type: 'updateUserinfo',
          payload: res.data,
        })
      }
    })
  }, [dispatch, id])
  return (
    <Box className={styles.pageWrap}>
      {userInfomation ? (
        <React.Fragment>
          <Box className={styles.topBgBox}>
            <img src={top_bg} className={styles.topBgImage} alt='backgroundImage' />
            <Box className={styles.topContentWrap}>
              <HeaderPic
                name={userInfomation.name}
                sex={userInfomation?.sex === '0' ? '先生' : userInfomation?.sex === 1 ? '女士' : '-'}
                img=''
              ></HeaderPic>
              <Box>
                <a href='tel:400-806-3399'>
                  <IconButton className={classes.iconBtn}>
                    <HeadsetMicRounded></HeadsetMicRounded>
                  </IconButton>
                </a>
                <IconButton className={classes.iconBtn} onClick={toUserCenter}>
                  <PermIdentity></PermIdentity>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box className={styles.contentBox}>
            <SeverrCard></SeverrCard>
            <Box marginY={1}>
              <CarouselCard></CarouselCard>
            </Box>
            <Box marginY={1}>
              <PartnerCard></PartnerCard>
            </Box>
          </Box>
        </React.Fragment>
      ) : (
        <Box style={{ height: '100vh' }} display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress color='primary' />
        </Box>
      )}
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(Home)
