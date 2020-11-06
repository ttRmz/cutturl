import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

export function AppProviders({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
