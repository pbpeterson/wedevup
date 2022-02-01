import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`

export const SelectWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
  margin-bottom: 4rem;
`

export const Cars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;

  @media (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 45rem) {
    grid-template-columns: 1fr;
  }
`
