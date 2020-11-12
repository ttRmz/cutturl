import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import theme from '../../styles/theme'
import { DropdownItemIcon, DropdownItemWrapper } from './DropdownItem.styles'

const COLORS = Object.keys(theme)

export function DropdownItem({ icon, children, ...props }) {
  return (
    <DropdownItemWrapper {...props}>
      {icon && <DropdownItemIcon as={FontAwesomeIcon} icon={icon} />}

      {children}
    </DropdownItemWrapper>
  )
}

DropdownItem.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.oneOf(COLORS),
}

DropdownItem.defaultProps = {
  color: 'secondary',
}

DropdownItem.COLORS = COLORS
