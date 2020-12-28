import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
  root: {
    width: '200px',
  },
  wrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function LinearBuffer() {
  const classes = useStyles()
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => {})
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 20
        const diff2 = Math.random() * 30
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
      </div>
    </div>
  )
}
