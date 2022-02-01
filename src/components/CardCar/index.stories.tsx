import CardCar, { CardCarProps } from '.'
import mockProps from './mock'

import { Meta, Story } from '@storybook/react'

export default {
  component: CardCar,
  title: 'CardCar',
  args: {
    ...mockProps,
  },
} as Meta

export const Default: Story<CardCarProps> = (props) => <CardCar {...props} />
