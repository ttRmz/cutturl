import { useEventListener } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'
import { Logo } from '../../components'
import { TopbarLabel, TopbarLogo, TopbarWrapper } from './Topbar.styles'

const BREAKPOINT = 34
const HEIGHT_BASE = 48
const MIN_HEIGHT = 30

export function Topbar({ label, ...props }) {
  const [scroll, setScroll] = React.useState(0)

  useEventListener('scroll', () => {
    setScroll(window.pageYOffset)
  })

  const height = HEIGHT_BASE - scroll / 6

  return (
    <TopbarWrapper
      {...props}
      style={{
        height: height > MIN_HEIGHT ? height : MIN_HEIGHT,
      }}
    >
      {BREAKPOINT > height ? (
        <TopbarLabel>{label}</TopbarLabel>
      ) : (
        <TopbarLogo as={Logo} />
      )}
    </TopbarWrapper>
  )
}

Topbar.propTypes = {
  label: PropTypes.string.isRequired,
}

Topbar.HEIGHT = HEIGHT_BASE
