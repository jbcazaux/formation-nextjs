import Head from 'next/head'
import styles from './Post.module.css'
import PropTypes from 'prop-types'
import LinkButton from 'components/LinkButton'
import PostClass from 'domain/Post'

const Post = ({ post, lastEdited }) => (
  <>
    <Head>
      <title>My blog - {post.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={post.title.split(' ').join(',')} />
    </Head>
    <h2>{post.title} </h2>
    <div className={styles.edited}>Last edited: {lastEdited}</div>
    <p>{post.body}</p>
    <div>
      <LinkButton color="secondary" href="/">
        Back to my posts
      </LinkButton>
    </div>
  </>
)

Post.propTypes = {
  post: PostClass.propTypes.isRequired,
  lastEdited: PropTypes.string.isRequired,
}

export default Post
