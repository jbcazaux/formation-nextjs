import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ height = 0, width = 0 }) => <div style={{ width: `${width}px`, height: `${height}px` }} />

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Spacer
