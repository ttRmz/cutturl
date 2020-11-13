import { navigate } from '@reach/router'
import { useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'
import { useAuth } from '../server/auth/query'

const LOCAL_STORAGE_USER_KEY = 'cutturl_pwa_user'
const LOCAL_STORAGE_USER_INITIAL_STATE = {}

const UserContext = React.createContext({})

export function useUserContext() {
  return React.useContext(UserContext)
}

export function UserContextProvider({ ...rest }) {
  const [user, setUser] = useLocalStorage(
    LOCAL_STORAGE_USER_KEY,
    LOCAL_STORAGE_USER_INITIAL_STATE,
  )

  const { auth, error, loading, user: userResponse } = useAuth()

  React.useEffect(() => {
    if (userResponse !== null) {
      setUser(userResponse)
      navigate('/dashboard')
    }
    // prevent setUser(userResponse) on logout
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userResponse])

  const login = React.useCallback(
    apiKey => {
      auth({
        base: process.env.REACT_APP_API_URL,
        requestOptions: {
          headers: {
            'X-API-KEY': apiKey,
          },
        },
      })
    },
    [auth],
  )

  const logout = React.useCallback(() => {
    setUser(LOCAL_STORAGE_USER_INITIAL_STATE)
    navigate('/')
  }, [setUser])

  const values = React.useMemo(
    () => ({
      user,
      logout,
      login,
      error,
      loading,
    }),
    [user, logout, login, error, loading],
  )

  return <UserContext.Provider value={values} {...rest} />
}
