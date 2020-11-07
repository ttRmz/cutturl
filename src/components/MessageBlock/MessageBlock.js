import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const COLORS = Object.keys(theme)

export const MessageBlock = styled.p`
  margin-bottom: 16px;
  padding: 8px;
  border-left: solid 4px;
  line-height: 1.4em;
  color: ${({ theme, color }) => theme[color].base};
  background-color: ${({ theme, color }) => theme[color].light};
`

MessageBlock.propTypes = {
  color: PropTypes.oneOf(COLORS),
}

MessageBlock.defaultProps = {
  color: 'secondary',
}

MessageBlock.COLORS = COLORS
