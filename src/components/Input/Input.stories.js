import React from 'react'

import { Input } from './Input'

export default {
  title: 'Forms/Input',
  component: Input,
}

const Template = args => <Input readOnly {...args} />

export const Example = Template.bind({})

Example.args = {
  label: 'Label',
  placeholder: 'Your placeholder',
  value: '',
}
