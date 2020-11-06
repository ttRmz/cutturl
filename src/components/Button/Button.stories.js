import React from 'react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
  primary: Button.defaultProps.primary,
  children: 'Button label',
}
