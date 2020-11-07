import React from 'react'
import { Spinner } from './Spinner'

export default {
  title: 'Loaders/Spinner',
  component: Spinner,
}

const Template = args => <Spinner {...args} />

export const Example = Template.bind({})

Example.args = {
  size: Spinner.defaultProps.size,
}
