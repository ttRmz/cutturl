import '!style-loader!css-loader!sass-loader!../src/index.scss'
import { create } from '@storybook/theming'
import pkg from '../package.json'

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
