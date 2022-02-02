import styled, { keyframes } from 'styled-components'

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 20rem;
  height: 20rem;
  align-self: center;
  margin-top: 20rem;

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`

export const LoaderDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20rem;
  height: 20rem;
  margin: 2.5rem;
  border: 2.5rem solid #ba0108;
  border-radius: 50%;
  animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ba0108 transparent transparent transparent;
`
