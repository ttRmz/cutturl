import styled from 'styled-components'

export const AuthWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 24px;

  & > button {
    width: 100%;
  }
`

export const AuthField = styled.label`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 28px;
`

export const AuthLink = styled.a`
  margin-top: 14px;
  font-size: 10px;
  text-decoration: underline;
`
