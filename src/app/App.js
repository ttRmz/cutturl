import { Redirect, Router } from '@reach/router'
import React from 'react'
import { RestfulProvider } from 'restful-react'
import { AppWrapper } from './App.styles'

const Home = React.lazy(() => import('../pages/Home/Home'))

export function App() {
  return (
    <RestfulProvider base={process.env.REACT_APP_API_URL}>
      <AppWrapper>
        <React.Suspense fallback="Loading...">
          <Router>
            <Home path="/" />
            <Redirect noThrow from="*" to="Home" />
          </Router>
        </React.Suspense>
      </AppWrapper>
    </RestfulProvider>
  )
}
