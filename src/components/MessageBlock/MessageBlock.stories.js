import React from 'react'

import { MessageBlock } from './MessageBlock'

export default {
  title: 'Display/MessageBlock',
  component: MessageBlock,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: MessageBlock.COLORS,
      },
    },
  },
}

const Template = args => <MessageBlock {...args} />

export const Example = Template.bind({})

Example.args = {
  children: 'MessageBlock text',
  color: MessageBlock.defaultProps.color,
}
