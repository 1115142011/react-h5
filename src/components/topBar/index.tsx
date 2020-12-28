import React from 'react'
import { Box, Typography, IconButton, Paper } from '@material-ui/core'
import { NavigateBefore } from '@material-ui/icons'
import styles from './top_bar.module.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProps {
  title: string
  showBack?: boolean
  rightElement?: React.ReactNode
  onLeft?: () => any
}

type TopBarProps = IProps & RouteComponentProps
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backButton: {
      marginRight: theme.spacing(1),
      padding: 6,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
  })
)
const TopBar: React.FC<TopBarProps> = (props) => {
  const classes = useStyles()
  const { history, title, rightElement, children, onLeft, showBack = true } = props
  const navigatorBack = () => {
    if (typeof onLeft === 'function') {
      onLeft()
    } else {
      history.goBack()
    }
  }
  return (
    <Paper elevation={4} className={styles.boxWrap} square>
      {showBack && (
        <IconButton className={classes.backButton} onClick={navigatorBack}>
          <NavigateBefore fontSize='large' />
        </IconButton>
      )}
      <Box className={styles.textBox}>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      {rightElement && <Box className={styles.rightBox}>{rightElement}</Box>}
      {children && <Box className={styles.rightBox}>{children}</Box>}
    </Paper>
  )
}

export default withRouter(TopBar)
