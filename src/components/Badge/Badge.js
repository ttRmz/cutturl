import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const COLORS = Object.keys(theme)

export const Badge = styled.span`
  padding: 6px 12px;
  font-weight: 700;
  font-size: 10px;
  border-radius: 12px;
  color: ${({ theme, color }) => theme[color].base};
  background-color: ${({ theme, color }) => theme[color].light};
`

Badge.propTypes = {
  color: PropTypes.oneOf(COLORS),
}

Badge.defaultProps = {
  color: 'primary',
}

Badge.COLORS = COLORS
