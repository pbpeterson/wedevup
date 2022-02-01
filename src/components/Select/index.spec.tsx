import { render } from '@testing-library/react'
import SelectFilter from '.'

describe('SelectFilter', () => {
  it('should render correctly if is day filter', () => {
    const sut = render(<SelectFilter selectType="day" />)
    const select = sut.getByTestId('select')

    expect(select.childElementCount).toBe(30)
  })

  it('should render correctly if is km filter', () => {
    const sut = render(<SelectFilter selectType="km" />)
    const select = sut.getByTestId('select') as HTMLSelectElement

    expect(select.firstChild?.textContent).toBe('50')
    expect(select.lastElementChild?.textContent).toBe('3000')
  })
})
