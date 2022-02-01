import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
`

export const Select = styled.select`
  cursor: pointer;
  background-color: #ba0108;
  border-radius: 0.8rem;
  color: white;
  padding: 0.7rem;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
`

export const Option = styled.option`
  padding: 3rem;
`
