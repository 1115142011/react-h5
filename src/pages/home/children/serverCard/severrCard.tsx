import React from 'react'
import { Box, Paper, Grid } from '@material-ui/core'
import SubTitle from '../subTitle'
import styles from './card.module.scss'
const listData = [
  {
    name: '闪电出租',
    image: require('src/assets/home/sever/lightning.svg'),
  },
  {
    name: '房屋管家',
    image: require('src/assets/home/sever/steward.svg'),
  },
  {
    name: '以旧焕新',
    image: require('src/assets/home/sever/swop.svg'),
  },
  {
    name: '线上签约',
    image: require('src/assets/home/sever/sign.svg'),
  },
  {
    name: '租房保洁',
    image: require('src/assets/home/sever/clean.svg'),
  },
  {
    name: '房屋维修',
    image: require('src/assets/home/sever/maintain.svg'),
  },
]

const SeverCard = () => {
  return (
    <Paper elevation={2} className={styles.outerBox}>
      <Grid container spacing={1}>
        {listData.map((item) => {
          return (
            <Grid item xs={6} className={styles.itemBox} key={item.name}>
              <img className={styles.imageItem} src={item.image} alt='' />
            </Grid>
          )
        })}
      </Grid>
      <Box className={styles.subTitleBox}>
        <SubTitle title='专业服务 值得信赖'></SubTitle>
      </Box>
    </Paper>
  )
}
export default SeverCard
