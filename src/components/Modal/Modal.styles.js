import styled from 'styled-components'

export const ModalWrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: fixed;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  outline: none;
  overflow: auto;
  padding: 28px 26px;
  background-color: #ffffff;
  z-index: 30;
  min-width: 270px;
`

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.secondary.light};
  overflow: hidden;
  z-index: 30;
`

export const ModalActions = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  & > button {
    min-width: 0;
    flex: 1;
  }

  & > button:last-child {
    margin-left: 8px;
  }
`

export const ModalTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`

export const ModalMessage = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.grey.base};
  margin-bottom: 24px;
  line-height: 1.2em;
`
