import { Redirect, Router } from '@reach/router'
import React from 'react'
import { RestfulProvider } from 'restful-react'
import { Progress } from '../components'
import { useUserContext } from '../contexts/user'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))

const Auth = React.lazy(() => import('../pages/Auth/Auth'))
const Logout = React.lazy(() => import('../pages/Logout/Logout'))

export function App() {
  const { user } = useUserContext()

  const apikey = user?.apikey || process.env.REACT_APP_API_KEY
  const isAuth = !!user?.apikey

  return (
    <RestfulProvider
      base={process.env.REACT_APP_API_URL}
      requestOptions={{ headers: { 'X-API-KEY': apikey } }}
    >
      <React.Suspense fallback={<Progress />}>
        <Router>
          <Dashboard path="/dashboard" />

          {!isAuth ? (
            <>
              <Home path="/" />
              <Auth path="/auth" />
            </>
          ) : (
            <Logout path="/logout" />
          )}

          <Redirect noThrow from="*" to={isAuth ? '/dashboard' : '/auth'} />
        </Router>
      </React.Suspense>
    </RestfulProvider>
  )
}
