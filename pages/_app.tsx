import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { ppoloProvider } from '@apollo.client'
import client from '../apollo-client'

// wrap whole app with session poviders to utlise hooks
// Higher order component pattern
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return( 
    <ApolloProvider client={}>
      <SessionProvider session={session}>
        <div className="h-screen overflow-y-scroll bg-slate-200">
        < Header />

        <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>

  )
}

export default MyApp
