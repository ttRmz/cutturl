import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../../components'
import { Layout } from './Layout'

export default {
  title: 'Navigation/Layout',
  component: Layout,
}

const Block = styled.div`
  height: 30vh;
  width: 80%;
  background-color: ${({ theme }) => theme.primary.light};
  margin-bottom: 12px;
`

const Template = ({ blocks, topBarTitle, pageTitle, showMenu, ...args }) => (
  <Layout title={topBarTitle} showMenu={showMenu} {...args}>
    {pageTitle && <PageTitle>{pageTitle}</PageTitle>}

    {[...Array(blocks)].map((el, index) => (
      <Block key={index} />
    ))}
  </Layout>
)

export const Example = Template.bind({})

Example.args = {
  topBarTitle: 'Label',
  pageTitle: 'Label',
  showMenu: true,
  blocks: 10,
}
