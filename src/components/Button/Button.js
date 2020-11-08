import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const COLORS = Object.keys(theme)

export const Button = styled.button`
  font-size: 14px;
  padding: 14px 22px;
  border-radius: 4px;
  background-color: ${({ color, theme }) => theme[color].base};
  box-shadow: ${({ color, theme }) => `0px 4px 0px ${theme[color].dark}`};
  font-weight: 700;
  color: #fff;
  min-width: 160px;
  text-align: center;
  ${({ extended }) => extended && `width: 100%;`}
  ${({ disabled }) => disabled && `opacity: .6`}
`

Button.propTypes = {
  color: PropTypes.oneOf(COLORS),
  extended: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = { color: 'primary', extended: false, disabled: false }

Button.COLORS = COLORS
