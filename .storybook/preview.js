import '!style-loader!css-loader!sass-loader!../src/index.scss'
import { create } from '@storybook/theming'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import pkg from '../package.json'
import { Progress } from '../src/components'
import { ModalProvider } from '../src/contexts/modal'
import '../src/i18n'
import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  options: {
    theme: create({
      base: 'light',
      brandTitle: pkg.name,
      brandUrl: pkg.repository.url,
    }),
    showRoots: true,
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <React.Suspense fallback={<Progress />}>
          <Story />
        </React.Suspense>
      </ModalProvider>
    </ThemeProvider>
  ),
]
