import styled from 'styled-components'

export const IconBlockWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 1em;
  font-size: ${({ size }) => size}px;
  min-height: 3em;
  height: 3em;
  min-width: 3em;
  width: 3em;
  background-color: ${({ color, theme }) => theme[color].base};
  color: #ffffff;
  ${({ disabled }) => disabled && `opacity: .6`}
`
