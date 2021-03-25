import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class BlogDocument extends Document {

  render() {
    return <Html lang="fr">
      <Head>
        <meta about="My blog is the greatest !"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  }
}
