import React from 'react'
import logo from '../../assets/cutturl-logo.png'
import { Asset } from '../Asset'
import { LogoWrapper } from './Logo.styles'

export function Logo(props) {
  return <Asset as={LogoWrapper} {...props} src={logo} alt="cutturl" />
}
