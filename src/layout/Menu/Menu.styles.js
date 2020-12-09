import styled from 'styled-components'
import { WithMaxWidth } from '../../styles/responsive'
import { Menu } from './Menu'

export const MenuWrapper = styled.nav`
  height: ${() => Menu.HEIGHT}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 20;
`

export const MenuContent = styled(WithMaxWidth)`
  height: 100%;
  flex: 1;
  min-width: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const MenuLink = styled.a`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 6px;
    font-size: 10px;
    font-weight: 700;
  }
`
