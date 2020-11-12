import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from './contexts/modal'
import { UserContextProvider } from './contexts/user'
import theme from './styles/theme'

export function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <ModalProvider>{children}</ModalProvider>
      </UserContextProvider>
    </ThemeProvider>
  )
}
