import { Redirect, Router } from '@reach/router'
import React from 'react'
import { RestfulProvider } from 'restful-react'
import { Progress } from '../components'
import { AppWrapper } from './App.styles'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))

export function App() {
  return (
    <RestfulProvider base={process.env.REACT_APP_API_URL}>
      <AppWrapper>
        <React.Suspense fallback={<Progress />}>
          <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />

            <Redirect noThrow from="*" to="/" />
          </Router>
        </React.Suspense>
      </AppWrapper>
    </RestfulProvider>
  )
}
