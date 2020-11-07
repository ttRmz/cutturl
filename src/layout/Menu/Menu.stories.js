import React from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'

const Main = styled.main`
  width: 100%;
  height: 300vh;
`

export default {
  title: 'Navigation/Menu',
  component: Menu,
}

const Template = args => (
  <Main>
    <Menu {...args} />
  </Main>
)

export const Example = Template.bind({})

Example.args = {
  label: 'Label',
}
