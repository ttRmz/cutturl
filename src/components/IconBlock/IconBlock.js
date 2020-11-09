import * as REGULAR__ICONS from '@fortawesome/free-regular-svg-icons'
import * as SOLID_ICONS from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import theme from '../../styles/theme'
import { IconBlockWrapper } from './IconBlock.styles'

const { far, prefix, ...ICONS } = { ...REGULAR__ICONS, ...SOLID_ICONS }
const COLORS = Object.keys(theme)

export function IconBlock({ icon, children, ...props }) {
  return (
    <IconBlockWrapper {...props}>
      <FontAwesomeIcon icon={icon} />
    </IconBlockWrapper>
  )
}

IconBlock.propTypes = {
  color: PropTypes.oneOf(COLORS),
  icon: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
}

IconBlock.defaultProps = { color: 'primary', size: 14, disabled: false }

IconBlock.COLORS = COLORS
IconBlock.ICONS = ICONS
