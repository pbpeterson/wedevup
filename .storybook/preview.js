import GlobalStyles from '../src/styles/global'
import { FilterProvider } from '../src/hooks/filter/index'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => (
    <>
      <FilterProvider>
        <Story />
        <GlobalStyles />
      </FilterProvider>
    </>
  ),
];