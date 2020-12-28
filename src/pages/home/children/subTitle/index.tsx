import React from 'react'
import { Box, Typography } from '@material-ui/core'
import praiseIcon from 'src/assets/home/praise.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  titleBox: {
    display: 'flex',
    alignItems: 'center',
  },
  titleImage: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
})
type TitleProps = {
  title: string
}
const SubTitle: React.FC<TitleProps> = (props) => {
  const classes = useStyles()
  const { title } = props
  return (
    <Box className={classes.titleBox}>
      <img className={classes.titleImage} src={praiseIcon} alt='' />
      <Typography variant='caption' color='primary'>
        {title}
      </Typography>
    </Box>
  )
}
export default SubTitle
