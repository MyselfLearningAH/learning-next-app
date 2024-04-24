import { useRef, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
 
import "./globals.css"
import IndexLayout from '@/components/layouts/IndexLayout'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { initializeCount } from './lib/slices/counterSlices'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout, count : { count : number}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeCount())
  }

 
  return <Provider store={storeRef.current}><IndexLayout>{getLayout(<Component {...pageProps} />)}</IndexLayout></Provider>
}