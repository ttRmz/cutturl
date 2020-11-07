import { Redirect, Router } from '@reach/router'
import React from 'react'
import { RestfulProvider } from 'restful-react'
import { Progress } from '../components'
import { useUserContext } from '../contexts/user'
import { AppWrapper } from './App.styles'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))
const Auth = React.lazy(() => import('../pages/Auth/Auth'))

export function App() {
  const { user } = useUserContext()

  const apikey = user?.apikey

  return (
    <RestfulProvider
      base={process.env.REACT_APP_API_URL}
      requestOptions={apikey && { headers: { 'X-API-KEY': apikey } }}
    >
      <AppWrapper>
        <React.Suspense fallback={<Progress />}>
          <Router>
            <Dashboard path="/dashboard" />

            {!apikey && (
              <>
                <Home path="/" />
                <Auth path="/auth" />
              </>
            )}

            <Redirect noThrow from="*" to={apikey ? '/dashboard' : '/'} />
          </Router>
        </React.Suspense>
      </AppWrapper>
    </RestfulProvider>
  )
}
