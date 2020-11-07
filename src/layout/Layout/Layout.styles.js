import styled from 'styled-components'
import { Topbar } from '../Topbar'

export const LayoutWrapper = styled.main`
  padding: 0 24px;
  padding-top: ${({ title }) => (title ? Topbar.HEIGHT_BASE : 0)}px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${({ centered }) =>
    centered && `align-items: center; justify-content: center;`}
`
