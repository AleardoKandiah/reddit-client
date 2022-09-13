import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

// wrap whole app with session poviders to utlise hooks
// Higher order component pattern
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return( 
  <SessionProvider session={session}>
      <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp
