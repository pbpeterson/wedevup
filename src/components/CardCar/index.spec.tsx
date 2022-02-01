import CardCar from '.'
import mockProps from './mock'

import { render } from '@testing-library/react'

describe('CardCar', () => {
  it('should render correctly', () => {
    const sut = render(<CardCar {...mockProps} />)
    const pricePerDay = sut.getByTestId('dayprice') as HTMLParagraphElement
    const pricePerKm = sut.getByTestId('kmprice') as HTMLParagraphElement

    expect(
      sut.getByRole('heading', {
        name: `${mockProps.brand} - ${mockProps.model}`,
      })
    ).toBeTruthy()

    expect(pricePerDay.textContent).toBe(
      new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(mockProps.pricePerDay / 100)
    )

    expect(pricePerKm.textContent).toBe(
      new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(mockProps.pricePerKm / 100)
    )
  })
})
