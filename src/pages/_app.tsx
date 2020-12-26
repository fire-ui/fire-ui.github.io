import Head from 'next/head'
import '../styles/globals.css'
import '../styles/FireUI.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="title" content="Fire UI ~ The framework aimed to contain everything that is frequently used on the frontend." />
        <meta name="description" content="Quickly design your website with Fire UI, an open-source project aimed to contain
     everything that is frequently used on the frontend. Fire UI supports a single folder for certain features to reduce CSS file size." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fire-ui.github.io" />
        <meta property="og:title" content="Fire UI ~ The framework aimed to contain everything that is frequently used on the frontend." />
        <meta property="og:description" content="Quickly design your website with Fire UI, an open-source project aimed to contain everything that
     is frequently used on the frontend. Fire UI supports a single folder for certain features to reduce CSS file size." />
        <meta property="og:image" content="https://fire-ui.github.io/logo.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fire-ui.github.io/fire-ui/" />
        <meta property="twitter:title" content="Fire UI ~ The framework aimed to contain everything that is frequently used on the frontend." />
        <meta property="twitter:description" content="Quickly design your website with Fire UI, an open-source project aimed to contain everything that
    is frequently used on the frontend. Fire UI supports a single folder for certain features to reduce CSS file size." />
        <meta property="twitter:image" content="https://fire-ui.github.io" />
        {/* <script src="https://unpkg.com/@fire-ui/fire-ui@0.1.0/FireUI.js"></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
