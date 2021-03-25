import React from 'react'
import Head from 'next/head'
import styles from './Post.module.css'
import Button from 'components/Button'

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
    <div>
      <Button color="secondary" href="/">
        Back to my posts
      </Button>
    </div>
  </>
)

Post.propTypes = {}

export default Post