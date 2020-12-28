import React from 'react'
import { RouteItem } from './index'
import { Redirect } from 'react-router-dom'

const Auth = (Route: RouteItem, props: any) => {
  const token = localStorage.getItem('currentToken')
  document.title = '像素公寓-' + Route.title

  if (Route.hasOwnProperty('isLogin') && !Route.isLogin) {
    return <Route.component {...props} />
  } else {
    if (token) {
      return <Route.component {...props} />
    } else {
      return <Redirect from='/' {...props} to='/login' />
    }
  }
}

export default Auth
