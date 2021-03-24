import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Post.module.css'

const Post = ({post, lastEdited}) => (
  <>
    <Head>
      <title>My blog - {post.title}</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="robots" content="index, follow"/>
      <meta name="keywords" content={post.title.split(' ').join(',')}/>
    </Head>
    <h2>{post.title} </h2>
    <div className={styles.edited}>Last edited: {lastEdited}</div>
    <p>{post.body}</p>
    <div><Link href="/"><a>Back to home page</a></Link></div>
  </>
)

Post.propTypes = {}

export default Post