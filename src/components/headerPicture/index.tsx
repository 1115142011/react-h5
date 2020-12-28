import React from 'react'
import { Box, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './header_pic.module.scss'
import defaultPic from 'src/assets/userinfo/default_header.jpg'
interface PicProps {
  img: string
  name?: string
  sex?: string
}
const useStyles = makeStyles({
  root: {
    width: 60,
    height: 60,
    border: 'solid 3px #ffffff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)',
  },
})
const HeaderPicture: React.FC<PicProps> = (props) => {
  const { img, sex, name } = props
  const classes = useStyles()
  return (
    <Box className={styles.headerBox}>
      <Avatar sizes='large' variant='circle' src={img ? img : defaultPic} className={classes.root}></Avatar>
      <Box className={styles.userInfo}>
        <Typography variant='h6'>{name ? name : '像素业主'}</Typography>
        <Typography variant='caption' className={styles.hintText}>
          {sex ? sex + '，' : ''}您好
        </Typography>
      </Box>
    </Box>
  )
}

export default HeaderPicture
