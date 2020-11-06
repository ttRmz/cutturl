import styled from 'styled-components'

const D = 175.6449737548828
const getSize = ({ size }) => `${size}px`

export const SpinnerWrapper = styled.div`
  width: ${getSize};
  min-width: ${getSize};
  height: ${getSize};
  min-height: ${getSize};

  animation: contanim 2s linear infinite;

  svg {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transform: rotate(-90deg);
    stroke: ${({ theme }) => theme.primary.base};
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
    animation: strokeanim 3s ease infinite;
    transform-origin: center center;
  }

  @keyframes strokeanim {
    0% {
      stroke-dasharray: 1, 300;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 150, 300;
      stroke-dashoffset: ${-D / 4};
    }

    100% {
      stroke-dasharray: 150, 300;
      stroke-dashoffset: ${-D};
    }
  }

  @keyframes contanim {
    100% {
      transform: rotate(360deg);
    }
  }
`
