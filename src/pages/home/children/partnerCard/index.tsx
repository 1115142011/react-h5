import React from 'react'
import { Box, Paper, Grid, Typography } from '@material-ui/core'
import SubTitle from '../subTitle'
import styles from './partnerCard.module.scss'
const listData = [
  {
    name: '成都市房管局注册企业',
    image: require('src/assets/home/partener/circle.svg'),
  },
  {
    name: '成都市租赁管理协会会员企业',
    image: require('src/assets/home/partener/circle.svg'),
  },
]
const partnerList = [
  {
    name: '建设银行',
    image: require('src/assets/home/partener/bank.svg'),
  },
  {
    name: '法大大',
    image: require('src/assets/home/partener/fdd.svg'),
  },
  {
    name: '通联支付',
    image: require('src/assets/home/partener/tonglian.svg'),
  },
]
const PartnerCard = () => {
  return (
    <Paper elevation={2} className={styles.outerBox}>
      <Box className={styles.subTitleBox}>
        <SubTitle title='诚信经营 优选伙伴'></SubTitle>
      </Box>
      <Grid container spacing={1}>
        {listData.map((item) => {
          return (
            <Grid item xs={6} className={styles.itemBox} key={item.name}>
              <img className={styles.imageItem} src={item.image} alt='' />
              <Typography className={styles.smallFont} variant='caption' noWrap>
                {item.name}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
      <Box marginY={2}>
        <Grid container spacing={1}>
          {partnerList.map((item) => {
            return (
              <Grid item xs={4} className={styles.itemBox} key={item.name}>
                <img className={styles.partnerIocn} src={item.image} alt='' />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Paper>
  )
}
export default PartnerCard
