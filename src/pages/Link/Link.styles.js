import styled from 'styled-components'

export const LinkForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 12px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const LinkRemoveButton = styled.button`
  margin-bottom: 44px;
`
