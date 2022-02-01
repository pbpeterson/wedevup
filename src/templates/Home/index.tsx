import { useEffect } from 'react'
import { useState } from 'react'
import CardCar, { CardCarProps } from '../../components/CardCar'
import SelectFilter from '../../components/Select'
import { useFilter } from '../../hooks/filter'
import * as S from './styles'

const HomeTemplate = () => {
  const [cars, setCars] = useState<CardCarProps[]>()
  const { priceByDay, priceByKm } = useFilter()

  useEffect(() => {
    const getCars = async () => {
      const res = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINTAPI}?duration=${priceByDay}&distance=${priceByKm}`
        )
      ).json()
      setCars(res)
    }
    getCars()
  }, [priceByDay, priceByKm])
  return (
    <>
      <S.Wrapper>
        <S.SelectWrapper>
          <SelectFilter selectType="day" />
          <SelectFilter selectType="km" />
        </S.SelectWrapper>
        <S.Cars>
          {cars?.map((car) => (
            <CardCar key={car.model} {...car} />
          ))}
        </S.Cars>
      </S.Wrapper>
    </>
  )
}

export default HomeTemplate
