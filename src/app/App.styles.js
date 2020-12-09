import styled from 'styled-components'
import { WithMaxWidth } from '../styles/responsive'

export const AppWrapper = styled(WithMaxWidth).attrs({ tagname: 'main' })`
  max-width: ${({ theme }) => theme.maxWidth}px;
`
