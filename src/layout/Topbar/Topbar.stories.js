import React from 'react'
import styled from 'styled-components'

import { Topbar } from './Topbar'

const Main = styled.main`
  width: 100%;
  height: 300vh;
`

export default {
  title: 'Navigation/Topbar',
  component: Topbar,
}

const Template = args => (
  <Main>
    <Topbar {...args} />
  </Main>
)

export const Example = Template.bind({})

Example.args = {
  label: 'Label',
}
