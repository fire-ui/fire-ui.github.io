import Head from 'next/head'
import '../styles/globals.css'
import '../styles/FireUI.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fire-ui.netlify.app/" />
        <meta property="og:image" content="https://fire-ui.netlify.app/logo.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fire-ui.netlify.app/" />
        <meta property="twitter:image" content="https://fire-ui.netlify.app/logo.jpg" />
        {/* <script src="https://unpkg.com/@fire-ui/fire-ui@0.1.0/FireUI.js"></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
