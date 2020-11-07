import React from 'react'

import { Button } from './Button'

export default {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Button.COLORS,
      },
    },
  },
}

const Template = args => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
  color: Button.defaultProps.color,
  extended: Button.defaultProps.extended,
  children: 'Button label',
}
