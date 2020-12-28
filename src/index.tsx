import React from 'react'
import ReactDOM from 'react-dom'
// import 'fontsource-roboto'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core'
import theme from './them'

import 'amfe-flexible'
ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.Fragment>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
