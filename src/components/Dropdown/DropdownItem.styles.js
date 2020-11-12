import styled from 'styled-components'

export const DropdownItemWrapper = styled.li`
  height: 36px;
  min-height: 36px;
  min-width: 120px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;
  color: ${({ theme, color }) => theme[color].base};
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.grey.light};
  }
`

export const DropdownItemIcon = styled.svg`
  margin-right: 8px;
`
