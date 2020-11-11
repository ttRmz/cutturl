import styled from 'styled-components'
import { EllipsisSpan } from '../EllipsisSpan'

export const LinkItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  padding: 14px;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

export const LinkItemDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
  margin-left: 12px;
  align-items: center;
`

export const LinkItemLink = styled.a`
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 8px;
  text-decoration: underline;

  & > svg {
    margin-left: 4px;
    font-size: 10px;
  }
`

export const LinkItemTarget = styled(EllipsisSpan)`
  color: ${({ theme }) => theme.grey.base};
  font-size: 12px;
  margin-top: 4px;
  width: 100%;
`
