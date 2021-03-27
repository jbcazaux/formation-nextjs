import postsApi from 'api/posts'
import PostComponent from 'components/posts/Post'
import PropTypes from 'prop-types'
import PostClass from 'domain/Post'

const Post = ({ post, lastEdited }) => <PostComponent post={post} lastEdited={lastEdited} />

Post.propTypes = {
  post: PostClass.proptypes.isRequired,
  lastEdited: PropTypes.string.isRequired,
}

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
