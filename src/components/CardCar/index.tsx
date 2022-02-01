import { useFilter } from '../../hooks/filter'
import * as S from './styles'

export type CardCarProps = {
  picturePath: string
  brand: string
  model: string
  pricePerDay: number
  pricePerKm: number
}

const CardCar = ({
  brand,
  model,
  picturePath,
  pricePerDay,
  pricePerKm,
}: CardCarProps) => {
  const { priceByDay, priceByKm } = useFilter()

  const getDiscount = (priceByDay: number, totalPrice: number) => {
    if (priceByDay > 1 && priceByDay <= 4) {
      console.log(totalPrice * 0.9)
      return totalPrice * 0.9
    } else if (priceByDay > 4 && priceByDay <= 10) return totalPrice * 0.7
    else if (priceByDay > 10) return totalPrice * 0.5
  }

  const finalPrice = (priceByDay * pricePerDay + pricePerKm * priceByKm) / 100
  const priceWithDiscount = getDiscount(priceByDay, finalPrice)

  return (
    <S.Wrapper>
      <S.Image src={picturePath} alt={`Foto do carro ${brand} ${model}`} />
      <S.CarName>
        {brand} - {model}
      </S.CarName>
      <S.Prices>
        <S.PricePerDayWrapper>
          <S.PricePerDayInfo>Preço por dia:</S.PricePerDayInfo>
          <S.PricePerDay data-testid="dayprice">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(pricePerDay / 100)}
          </S.PricePerDay>
        </S.PricePerDayWrapper>
        <S.PricePerKmWrapper>
          <S.PricePerKmInfo>Preço por Km:</S.PricePerKmInfo>
          <S.PricePerKm data-testid="kmprice">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(pricePerKm / 100)}
          </S.PricePerKm>
        </S.PricePerKmWrapper>

        <S.FinalPriceDivider />
        <S.FinalPriceWrapper>
          <S.FinalPriceInfo>Preço final:</S.FinalPriceInfo>
          <S.FinalPriceBox>
            <S.FinalPrice
              data-testid="finalprice"
              isPromotional={!!priceWithDiscount}
            >
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(finalPrice)}
            </S.FinalPrice>
            {!!priceWithDiscount && (
              <S.PromotionalPrice data-testid="finalprice">
                {new Intl.NumberFormat('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(priceWithDiscount)}
              </S.PromotionalPrice>
            )}
          </S.FinalPriceBox>
        </S.FinalPriceWrapper>
      </S.Prices>
    </S.Wrapper>
  )
}

export default CardCar
