import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import ReactDOM from 'react-dom'
// import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core/styles'
interface ToastProps {
  msg?: string
  // type?:'error'|'warning'|'info'|'sucess'
}

const useStyle = makeStyles({
  root: {
    fontSize: '14px',
    '& .MuiSnackbarContent-root': {
      fontSize: '14px',
      backgroundColor: '#f44336',
    },
  },
})
//  function Alert(props){
//    const classes = useStyle()
//    return <MuiAlert  className={classes.root}  elevation={6} variant='filled' {...props} />
//  }

const Toast: React.FC<ToastProps> = (props) => {
  const { msg } = props
  const [show, changeShow] = useState<boolean>(true)
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    changeShow(false)
  }
  const classes = useStyle()
  return (
    <Snackbar
      className={classes.root}
      message={msg ? msg : '数据错误！'}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={show}
      autoHideDuration={3000}
      onClose={handleClose}
    />
  )
}

export default function showToast(param: ToastProps) {
  const targetElement = document.createElement('div')
  document.body.appendChild(targetElement)
  ReactDOM.render(<Toast {...param} />, targetElement)
  setTimeout(() => {
    document.body.removeChild(targetElement)
  }, 4000)
}
