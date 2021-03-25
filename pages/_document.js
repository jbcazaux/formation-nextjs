import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class BlogDocument extends Document {

  render() {
    return <Html lang="fr">
      <Head>
        <meta about="My blog is the greatest !"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  }
}
