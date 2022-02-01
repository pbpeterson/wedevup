import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { FilterProvider } from '../hooks/filter'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <FilterProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </FilterProvider>
    </>
  )
}

export default MyApp
