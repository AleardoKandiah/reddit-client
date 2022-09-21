import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl">
      <Head>
        <title>Reddit Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PostBox */}
    <PostBox/>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
