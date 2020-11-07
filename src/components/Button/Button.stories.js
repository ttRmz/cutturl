import React from 'react'

import { Button } from './Button'

export default {
  title: 'Actions/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
  primary: Button.defaultProps.primary,
  extended: Button.defaultProps.extended,
  children: 'Button label',
}
