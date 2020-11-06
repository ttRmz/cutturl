import styled from 'styled-components'

export const LogoWrapper = styled.figure`
  width: ${props => (props.extended ? '100%' : '72px')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`

export const LogoWrapperImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
