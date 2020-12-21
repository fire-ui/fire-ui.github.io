import Head from 'next/head'
import { fireUIJS } from 'src/constants'
import '../styles/globals.css'
import '../styles/FireUI.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: fireUIJS
        }} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
