import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import SubTitle from '../subTitle'
import styles from './carousel.module.scss'
import Side1 from 'src/assets/home/carousel/side1.png'
import Side2 from 'src/assets/home/carousel/side2.png'
import MainPic from 'src/assets/home/carousel/main.png'

const CarouseCard = () => {
  return (
    <Paper elevation={2} className={styles.outerBox}>
      <Box className={styles.subTitleBox}>
        <SubTitle title='精致改造 品质升级'></SubTitle>
      </Box>
      <Box padding={2}>
        <Paper elevation={1} className={styles.imageWrap}>
          <Box className={styles.mainImageContent}>
            <img src={MainPic} className={styles.mainImage} alt=''></img>
          </Box>
          <Box className={styles.sideImageContent}>
            <Box className={styles.thumbnailBox}>
              <img src={Side1} alt='' />
              <Typography variant='caption' className={styles.imgDesc}>
                改造后
              </Typography>
            </Box>
            <Box className={styles.thumbnailBox}>
              <img src={Side2} alt='' />
              <Typography variant='caption' className={styles.imgDesc}>
                改造前
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Box paddingX={1} marginTop={2} color='#0A1E74'>
          <Typography variant='h4'>合租·中德英伦联邦苹果公寓-主卧</Typography>
          <Box className={styles.tagsBox}>
            <Typography variant='caption' className={styles.tags}>
              标签一
            </Typography>
            <Typography variant='caption' className={styles.tags}>
              限时活动
            </Typography>
            <Typography variant='caption' className={styles.tags}>
              预计2020-08-04可租
            </Typography>
          </Box>
          <Box className={styles.priceText} paddingY={2}>
            <Typography variant='h6'>改造后</Typography>
            <Typography className={styles.orangeText} variant='h5'>
              ￥4050 元/月
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
export default CarouseCard
