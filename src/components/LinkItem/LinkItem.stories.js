import React from 'react'
import { LinkItem } from './LinkItem'

export default {
  title: 'Display/LinkItem',
  component: LinkItem,
}

const Template = args => <LinkItem {...args} />

export const Example = Template.bind({})

Example.args = {
  data: {
    link: 'https://github.com/ttRmz/cutturl',
    target: 'https://github.com/ttRmz/cutturl',
    banned: false,
  },
}
