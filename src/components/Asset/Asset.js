import PropTypes from 'prop-types'
import React from 'react'
import { AssetImg, AssetWrapper } from './Asset.styles'

export function Asset({ children, src, alt, ...props }) {
  return (
    <AssetWrapper {...props}>
      <AssetImg src={src} alt={alt} />
    </AssetWrapper>
  )
}

Asset.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
