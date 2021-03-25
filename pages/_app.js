import React from 'react'
import Head from 'next/head'

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My nice blog !</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default _App
