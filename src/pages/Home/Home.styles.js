import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  a:not(:last-child) {
    margin-bottom: 14px;
  }
`
export const HomeTitle = styled.h1`
  margin-bottom: 44px;
  margin-top: 18px;
  font-weight: 900;
`
