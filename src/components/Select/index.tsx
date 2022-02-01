import React from 'react'
import { useFilter } from '../../hooks/filter'
import * as S from './styles'

export type SelectParams = {
  selectType: 'day' | 'km'
}

const SelectFilter = ({ selectType }: SelectParams) => {
  const options = []
  const { setPriceByDay, setPriceByKm, priceByDay, priceByKm } = useFilter()

  if (selectType == 'day') {
    for (let i = 1; i <= 30; i++) {
      options.push(i)
    }
  } else {
    for (let i = 50; i <= 3000; i += 50) {
      options.push(i)
    }
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectType === 'day'
      ? setPriceByDay(Number(event.target.value))
      : setPriceByKm(Number(event.target.value))
  }

  return (
    <S.Wrapper>
      <S.Select
        data-testid="select"
        onChange={handleSelectChange}
        value={selectType === 'day' ? priceByDay : priceByKm}
      >
        {options.map((option) => (
          <S.Option key={option}>{option}</S.Option>
        ))}
      </S.Select>
    </S.Wrapper>
  )
}

export default SelectFilter
