import styled, { css } from 'styled-components'

type FinalPriceProps = {
  isPromotional?: boolean
}

export const Wrapper = styled.div`
  max-width: 30rem;
  background: #fff;
  border-radius: 0.4rem;
  margin: 0 auto;
`

export const Image = styled.img`
  max-width: 100%;
`

export const CarName = styled.h3`
  margin-top: 1rem;
  padding-left: 2rem;
  font-size: 1.875rem;
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 0;
`
export const PricePerKmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  color: #718096;
  margin-top: 1rem;
`
export const PricePerKmInfo = styled.strong`
  font-size: 1.5rem;
`

export const PricePerKm = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  background: #121212;
  padding: 0.5rem;
  border-radius: 0.4rem;
`

export const PricePerDay = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  background: #121212;
  padding: 0.5rem;
  border-radius: 0.4rem;
`

export const PricePerDayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  color: #718096;
`
export const PricePerDayInfo = styled.strong`
  font-size: 1.5rem;
`

export const FinalPriceDivider = styled.div`
  display: block;
  width: 100%;
  height: 0.1rem;
  background: #eee;
  margin: 2rem 0 1rem 0.5rem;
`

export const FinalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FinalPriceInfo = styled.strong`
  font-size: 1.5rem;
  padding-left: 2rem;
`

const finalPriceModifiers = {
  isPromotional: () => css`
    color: white;
    text-decoration: line-through;
    background: #718096;
  `,
}
export const FinalPrice = styled.p<FinalPriceProps>`
  ${({ isPromotional }) => css`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    background: linear-gradient(360deg, rgb(239, 60, 78) 0%, rgb(186, 1, 8) 50%)
      repeat scroll 0% 0%;
    padding: 0.5rem;
    border-radius: 0.4rem;
    ${isPromotional && finalPriceModifiers.isPromotional()}
  `}
`

export const FinalPriceBox = styled.div`
  display: flex;
  gap: 1rem;
`

export const PromotionalPrice = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  background: linear-gradient(360deg, rgb(239, 60, 78) 0%, rgb(186, 1, 8) 50%)
    repeat scroll 0% 0%;
  padding: 0.5rem;
  border-radius: 0.4rem;
`
