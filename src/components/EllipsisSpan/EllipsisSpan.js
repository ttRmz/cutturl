import PropTypes from 'prop-types'
import styled from 'styled-components'

export const EllipsisSpan = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 1.25em;
`

EllipsisSpan.propTypes = {
  children: PropTypes.string.isRequired,
}
