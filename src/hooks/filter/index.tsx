import React, { createContext, useContext, useState } from 'react'

type FilterContextParams = {
  priceByKm: number
  setPriceByKm: (value: number) => void
  priceByDay: number
  setPriceByDay: (value: number) => void
}

export const FilterContextDefaultValues = {
  priceByKm: 0,
  setPriceByKm: () => null,
  priceByDay: 0,
  setPriceByDay: () => null,
}

export const FilterContext = createContext<FilterContextParams>(
  FilterContextDefaultValues
)

type FilterProviderProps = {
  children: React.ReactNode
}

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [priceByKm, setPriceByKm] = useState<number>(50)
  const [priceByDay, setPriceByDay] = useState<number>(1)

  return (
    <FilterContext.Provider
      value={{
        priceByDay,
        setPriceByDay,
        priceByKm,
        setPriceByKm,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
