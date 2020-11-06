import styled from 'styled-components'

export const InputWrapper = styled.label`
  display: inline-flex;
  flex-direction: column;
`

export const InputLabel = styled.span`
  font-weight: 700;
`

export const InputField = styled.input`
  padding: 10px 0;
  display: block;
  width: 300px;
  border: none;
  background-color: transparent;
  border-bottom: ${({ theme }) => `2px solid ${theme.secondary.base}`};
  transition: 0.2s ease all;

  &:focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.primary.base}`};
  }
`
