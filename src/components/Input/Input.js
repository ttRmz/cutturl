import PropTypes from 'prop-types'
import React from 'react'
import { InputField, InputWrapper, InputLabel } from './Input.styles'

export function Input({ label, wrapperProps, ...props }) {
  return (
    <InputWrapper {...wrapperProps}>
      <InputLabel>{label}</InputLabel>
      <InputField placeholder={label} {...props} />
    </InputWrapper>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object,
}

Input.defaultProps = {
  wrapperProps: {},
  value: '',
}
