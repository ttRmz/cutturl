import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
  font-size: 14px;
  padding: 14px 22px;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? '#1fc19f' : '#363C3F')};
  box-shadow: ${({ primary }) =>
    `0px 4px 0px ${primary ? '#16a085' : '#000000'}`};
  font-weight: 700;
  color: #fff;
  min-width: 160px;
  text-align: center;
`

Button.propTypes = {
  primary: PropTypes.bool,
}

Button.defaultProps = { primary: false }
