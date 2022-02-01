import SelectFilter, { SelectParams } from '.'

import { Meta, Story } from '@storybook/react'

export default {
  component: SelectFilter,
  title: 'Select',
  args: {
    selectType: 'day',
  },
} as Meta

export const Default: Story<SelectParams> = (props) => (
  <SelectFilter {...props} />
)
