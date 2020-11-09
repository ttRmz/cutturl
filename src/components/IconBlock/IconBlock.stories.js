import { faLink } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { IconBlock } from './IconBlock'

export default {
  title: 'Display/IconBlock',
  component: IconBlock,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: IconBlock.COLORS,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: IconBlock.ICONS,
      },
    },
  },
}

const Template = args => <IconBlock {...args} />

export const Example = Template.bind({})

Example.args = {
  color: IconBlock.defaultProps.color,
  size: IconBlock.defaultProps.size,
  icon: faLink,
  disabled: IconBlock.defaultProps.disabled,
}
