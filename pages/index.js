import Head from 'next/head'
import Link from 'next/link'
import photosApi from 'api/photos'
import postsApi from 'api/posts'

const App = ({ photos, posts }) => (
  <div className="container">
    <Head>
      <title>My albums</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <section>
      <h3>Photos</h3>
      {photos.map(p => (
        <li key={p.id}>{p.id} - <Link href={`/photos/${p.id}`}><a>{p.title}</a></Link></li>
      ))}
    </section>
    <section>
      <h3>Posts</h3>
      {posts.map(p => (
        <li key={p.id}>{p.id} - <Link href={`/posts/${p.id}`}><a>{p.title}</a></Link></li>
      ))}
    </section>
  </div>
)

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
