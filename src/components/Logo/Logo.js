import React from 'react'
import logo from '../../assets/cutturl-logo.png'
import { LogoWrapper, LogoWrapperImg } from './Logo.styles'

export function Logo(props) {
  return (
    <LogoWrapper {...props}>
      <LogoWrapperImg src={logo} alt="cutturl-logo" />
    </LogoWrapper>
  )
}
