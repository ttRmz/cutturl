import { useEventListener, useOnClickOutside } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'
import { DropdownPopover, DropdownWrapper } from './Dropdown.styles'
import { DropdownItem } from './DropdownItem'

export function Dropdown({ actionElement: actionElementProp, children }) {
  const [opened, setOpened] = React.useState(false)

  const popoverElementRef = React.useRef()
  const actionElementRef = React.useRef()

  const handleCloseDropdown = () => {
    if (opened) {
      setOpened(false)
    }
  }

  const onActionClick = () => {
    setOpened(opened => !opened)
  }

  const actionElement = React.cloneElement(actionElementProp, {
    onClick: onActionClick,
    as: 'button',
    ref: actionElementRef,
  })

  useOnClickOutside(popoverElementRef, event => {
    !actionElementRef.current.contains(event.target) && handleCloseDropdown()
  })

  useEventListener('scroll', handleCloseDropdown)

  return (
    <DropdownWrapper>
      {actionElement}

      {opened && (
        <DropdownPopover ref={popoverElementRef} onClick={handleCloseDropdown}>
          {children}
        </DropdownPopover>
      )}
    </DropdownWrapper>
  )
}

Dropdown.propTypes = {
  actionElement: PropTypes.element.isRequired,
}

Dropdown.Item = DropdownItem
