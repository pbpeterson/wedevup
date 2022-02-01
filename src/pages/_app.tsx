import type { AppProps } from 'next/app'
import { FilterProvider } from '../hooks/filter'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FilterProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </FilterProvider>
    </>
  )
}

export default MyApp
