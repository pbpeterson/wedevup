import React, { useEffect } from 'react'
import { useState } from 'react'
import CardCar, { CardCarProps } from '../../components/CardCar'
import Loader from '../../components/Loader'
import SelectFilter from '../../components/Select'
import { useFilter } from '../../hooks/filter'
import * as S from './styles'

const HomeTemplate = () => {
  const [cars, setCars] = useState<CardCarProps[]>()
  const itensPerPage = 6
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { priceByDay, priceByKm } = useFilter()
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentCars = cars?.slice(startIndex, endIndex)
  const [isLoading, setIsLoader] = useState<boolean>(false)

  const totalPages = cars?.length ? Math.ceil(cars.length / itensPerPage) : 0

  useEffect(() => {
    const getCars = async () => {
      setIsLoader(true)
      const res = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINTAPI}?duration=${priceByDay}&distance=${priceByKm}`
        )
      ).json()
      setCars(res)
      setIsLoader(false)
    }
    getCars()
  }, [priceByDay, priceByKm])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(event.currentTarget.value))
  }
  return (
    <>
      <S.Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <S.SelectWrapper>
              <SelectFilter selectType="day" />
              <SelectFilter selectType="km" />
            </S.SelectWrapper>
            <S.Cars>
              {currentCars?.map((car) => (
                <CardCar key={car.model} {...car} />
              ))}
            </S.Cars>
            <S.PaginatorWrapper style={{ color: 'white' }}>
              {Array.from(Array(totalPages), (item, index) => {
                return (
                  <S.PagintorItem
                    key={index}
                    isActive={index == currentPage}
                    value={index}
                    onClick={handleClick}
                  >
                    {index + 1}
                  </S.PagintorItem>
                )
              })}
            </S.PaginatorWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default HomeTemplate
