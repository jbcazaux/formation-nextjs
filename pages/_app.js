import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My nice blog !</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta key="about" about="helloworld2"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
