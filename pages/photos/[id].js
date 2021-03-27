import photosApi from 'api/photos'
import Head from 'next/head'
import Button from 'components/Button'

const Photo = ({ photo }) => (
  <>
    <Head>
      <title>My albums - {photo.id}</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={photo.title.split(' ').join(',')}/>
    </Head>
    <h2>{photo.title}</h2>
    <img src={photo.url} width="600px" height="600px" alt={photo.title}/>
    <div>
      <Button color="primary" href="/">
        Back to my album
      </Button>
    </div>
  </>
)

export default Photo

export const getStaticPaths = async () => {
  const photos = await photosApi.fetch()
  const paths = photos.map(photo => ({
    params: { id: String(photo.id) },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const photo = await photosApi.fetchById(params.id)
  return { props: { photo } }
}
