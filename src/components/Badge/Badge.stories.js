import React from 'react'

import { Badge } from './Badge'

export default {
  title: 'Display/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Badge.COLORS,
      },
    },
  },
}

const Template = args => <Badge {...args} />

export const Example = Template.bind({})

Example.args = {
  children: 'Badge text',
  color: Badge.defaultProps.color,
}
