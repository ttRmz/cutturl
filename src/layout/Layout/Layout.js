import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from '../Menu'
import { Topbar } from '../Topbar'
import { LayoutWrapper } from './Layout.styles'

export function Layout(props) {
  const { title, children, showMenu } = props

  return (
    <LayoutWrapper {...props}>
      {children}

      {title && <Topbar label={title} />}

      {showMenu && <Menu />}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  centered: PropTypes.bool,
  showMenu: PropTypes.bool,
}
