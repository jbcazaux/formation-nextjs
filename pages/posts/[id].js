import React from 'react'
import postsApi from 'api/posts'
import Head from 'next/head'
import Link from 'next/link'

const Post = ({post}) => (
  <>
    <Head>
      <title>My blog - {post.title}</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={post.title.split(' ').join(',')}/>
    </Head>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <div><Link href="/" ><a>Back to home page</a></Link></div>
  </>
)

export default Post

export const getStaticPaths = async () => {
  const posts = await postsApi.fetch()
  const paths = posts.map(post => ({
    params: { id: `${post.id}`},
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const post = await postsApi.fetchById(params.id)
  return { props: { post } }
}
