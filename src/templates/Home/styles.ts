import styled, { css } from 'styled-components'

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

export const PaginatorWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

type PaginatorItemProps = {
  isActive: boolean
}

const PagintorItemModifier = {
  isActive: () => css`
    background-color: #ba0108;
  `,
}

export const PagintorItem = styled.button<PaginatorItemProps>`
  ${({ isActive }) => css`
    padding: 2rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    color: #fff;
    border: 0.2rem solid #ba0108;
    transition: background 0.4s;

    &:hover {
      background-color: #ba0108;
    }

    ${isActive && PagintorItemModifier.isActive()}
  `}
`
