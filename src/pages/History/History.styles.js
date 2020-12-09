import styled from 'styled-components'

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HistoryListItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
`

export const HistoryClear = styled.button`
  margin-top: 12px;
  margin-bottom: 32px;
`

export const HistoryAsset = styled.figure`
  width: 80%;
  max-width: 440px;
`

export const HistoryEmptyMessage = styled.p`
  margin-top: 24px;
  margin-bottom: 32px;
  font-weight: 500;
`
