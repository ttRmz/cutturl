import { LayoutWrapper } from './Layout.styles'
import React from 'react'
import { Topbar } from '../Topbar'
import PropTypes from 'prop-types'

export function Layout(props) {
  const { title, children } = props

  return (
    <LayoutWrapper {...props}>
      {children}

      {title && <Topbar label={title} />}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  centered: PropTypes.bool,
}
