import React from 'react'
import { SpinnerWrapper } from './Spinner.styles'
import PropTypes from 'prop-types'

export function Spinner(props) {
  return (
    <SpinnerWrapper {...props}>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="28"
        />
      </svg>
    </SpinnerWrapper>
  )
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
}

Spinner.defaultProps = {
  size: 48,
}
