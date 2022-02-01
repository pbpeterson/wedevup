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
          <S.FinalPrice data-testid="finalprice">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(
              (priceByDay * pricePerDay + pricePerKm * priceByKm) / 100
            )}
          </S.FinalPrice>
        </S.FinalPriceWrapper>
      </S.Prices>
    </S.Wrapper>
  )
}

export default CardCar
