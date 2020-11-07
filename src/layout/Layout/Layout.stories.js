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

const Template = ({ blocks, title, ...args }) => (
  <Layout title={title} {...args}>
    {title && <PageTitle>{title}</PageTitle>}

    {[...Array(blocks)].map(index => (
      <Block key={index} />
    ))}
  </Layout>
)

export const Example = Template.bind({})

Example.args = {
  title: 'Label',
  blocks: 10,
}
