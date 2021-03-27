import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Time = ({ time }) => <div>The time is : {time}</div>

Time.propTypes = {
  time: PropTypes.string.isRequired,
}

export default Time

export const getServerSideProps = () => {
  const now = new Date()
  return {
    props: { time: format(now, 'HH:mm:ss') },
  }
}
