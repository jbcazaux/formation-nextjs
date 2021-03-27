import PropTypes from 'prop-types'

export default class Post {
  constructor(userId, id, title, body) {
    this.userId = userId
    this.id = id
    this.title = title
    this.body = body
  }
}

Post.propTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
})
