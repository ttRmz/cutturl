import React from 'react'

import { PageTitle } from './PageTitle'

export default {
  title: 'PageTitle',
  component: PageTitle,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: PageTitle.ALIGNS,
      },
    },
  },
}

const Template = args => <PageTitle {...args} />

export const Example = Template.bind({})

Example.args = {
  children: 'PageTitle text',
  align: PageTitle.defaultProps.align,
}
