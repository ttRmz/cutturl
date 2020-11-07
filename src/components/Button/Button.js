import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
  font-size: 14px;
  padding: 14px 22px;
  border-radius: 4px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.primary.base : theme.secondary.base};
  box-shadow: ${({ primary, theme }) =>
    `0px 4px 0px ${primary ? theme.primary.dark : theme.secondary.dark}`};
  font-weight: 700;
  color: #fff;
  min-width: 160px;
  text-align: center;
  ${({ extended }) => extended && `width: 100%;`}
`

Button.propTypes = {
  primary: PropTypes.bool,
  extended: PropTypes.bool,
}

Button.defaultProps = { primary: false, extended: false }
