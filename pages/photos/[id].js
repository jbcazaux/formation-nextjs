import photosApi from 'api/photos'
import Head from 'next/head'
import LinkButton from 'components/LinkButton'
import PhotoClass from 'domain/Photo'
import Image from 'next/image'
import Spacer from '../../components/Spacer'

const Photo = ({ photo }) => (
  <>
    <Head>
      <title>My albums - {photo.id}</title>
      <meta name="keywords" content={photo.title.split(' ').join(',')} />
    </Head>
    <h2>{photo.title}</h2>
    <Image src={photo.url} width={600} height={600} alt={photo.title} />
    <div>
      <LinkButton color="primary" href="/">
        Back to my album
      </LinkButton>
    </div>
    <Spacer height={800} />
    <Image src={photo.thumbnailUrl} width={150} height={150} alt={photo.title} />
  </>
)

Photo.propTypes = {
  photo: PhotoClass.propTypes.isRequired,
}

export default Photo

export const getStaticPaths = async () => {
  const photos = await photosApi.fetch()
  const paths = photos.map(photo => ({
    params: { id: String(photo.id) },
  }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  const photo = await photosApi.fetchById(params.id)
  return { props: { photo }, notFound: params.id === '13' }
}
