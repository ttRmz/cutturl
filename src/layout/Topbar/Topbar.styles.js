import styled from 'styled-components'

export const TopbarWrapper = styled.header`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: #fff;
`

export const TopbarLogo = styled.header`
  height: 60%;
  animation: TopbarLogo-display 125ms cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;

  @keyframes TopbarLogo-display {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`

export const TopbarLabel = styled.h1`
  font-weight: 900;
  font-size: 12px;
  animation: TopbarLabel-display 125ms cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;

  @keyframes TopbarLabel-display {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`
