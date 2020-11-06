import styled from 'styled-components'

export const Progress = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  display: block;
  width: 100%;
  background-clip: padding-box;
  overflow: hidden;

  &:before {
    content: '';
    background-color: #1fc19f;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: Progress-animation 2s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
  }

  @keyframes Progress-animation {
    0% {
      left: -35%;
      right: 100%;
    }

    60% {
      left: 100%;
      right: -90%;
    }

    100% {
      left: 100%;
      right: -90%;
    }
  }

  &:after {
    content: '';
    background-color: #1fc19f;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: Progress-shortAnimation 2s cubic-bezier(0.165, 0.84, 0.44, 1)
      infinite;
    animation-delay: 1.15s;
  }

  @keyframes Progress-shortAnimation {
    0% {
      left: -200%;
      right: 100%;
    }

    60% {
      left: 107%;
      right: -8%;
    }

    100% {
      left: 107%;
      right: -8%;
    }
  }
`
