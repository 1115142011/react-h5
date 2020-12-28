import React, { Suspense } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './router/Auth'
import ROUTES from './router/index'
import Progress from 'src/components/progress'
function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Progress />}>
        <Switch>
          {ROUTES.map((ROUTE) => (
            <Route key={ROUTE.path} path={ROUTE.path} render={(props) => Auth(ROUTE, props)} />
          ))}
          <Redirect from='/' to='/login' />
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default App
