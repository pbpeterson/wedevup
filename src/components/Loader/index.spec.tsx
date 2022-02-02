import { render } from '@testing-library/react'
import Loader from '.'

describe('Loader', () => {
  it('should render loader correctly', () => {
    const sut = render(<Loader />)

    const LoaderElement = sut.getByTestId('loader')

    expect(LoaderElement).toBeTruthy()
  })
})
