import PropTypes from 'prop-types'

export default class Photo {
  constructor(albumId, id, title, url, thumbnailUrl) {
    this.albumId = albumId
    this.id = id
    this.title = title
    this.url = url
    this.thumbnailUrl = thumbnailUrl
  }
}

Photo.propTypes = PropTypes.shape({
  albumId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
})
