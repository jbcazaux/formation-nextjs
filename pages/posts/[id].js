import React from 'react'
import postsApi from 'api/posts'
import PostComponent from 'components/posts/Post'

const Post = ({ post, lastEdited }) => (
  <PostComponent post={post} lastEdited={lastEdited}/>
)

export default Post

export const getStaticPaths = async () => {
  const posts = await postsApi.fetch()
  const paths = posts.map(post => ({
    params: { id: `${post.id}` },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const post = await postsApi.fetchById(params.id)
  return { props: { post, lastEdited: String(new Date()) }, revalidate: 10 }
}
