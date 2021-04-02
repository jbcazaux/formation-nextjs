import Head from 'next/head'
import Link from 'next/link'
import photosApi from 'api/photos'
import postsApi from 'api/posts'
import PropTypes from 'prop-types'
import Photo from 'domain/Photo'
import Post from 'domain/Post'
import 'i18n/i18n'

const App = ({ photos, posts }) => (
  <div className="container">
    <Head>
      <title>My photos and posts !</title>
    </Head>

    <section id="photos">
      <h3>Photos</h3>
      {photos.map(p => (
        <li key={p.id}>
          {p.id} -{' '}
          <Link href={`/photos/${p.id}`}>
            <a>{p.title}</a>
          </Link>
        </li>
      ))}
    </section>
    <section id="posts">
      <h3>Posts</h3>
      {posts.map(p => (
        <li key={p.id}>
          {p.id} -{' '}
          <Link href={`/posts/${p.id}`}>
            <a>{p.title}</a>
          </Link>
        </li>
      ))}
    </section>
    <Link href="/time">
      <a>What time is it ?</a>
    </Link>
  </div>
)

App.propTypes = {
  photos: PropTypes.arrayOf(Photo.propTypes).isRequired,
  posts: PropTypes.arrayOf(Post.propTypes).isRequired,
}

export default App

export const getStaticProps = async () => {
  const photos = await photosApi.fetch()
  const posts = await postsApi.fetch()

  return {
    props: {
      photos,
      posts,
    },
  }
}
