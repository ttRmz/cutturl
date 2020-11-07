import PropTypes from 'prop-types'
import styled from 'styled-components'

const ALIGNS = ['center', 'left', 'right']

export const PageTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 44px;
  margin-top: 18px;
  font-weight: 900;
  text-align: ${({ align }) => align};
  line-height: 1.4em;

  a {
    text-decoration: underline;
  }
`

PageTitle.propTypes = {
  align: PropTypes.oneOf(ALIGNS),
}

PageTitle.defaultProps = { align: 'left' }

PageTitle.ALIGNS = ALIGNS
