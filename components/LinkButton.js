import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const CustomLink = React.forwardRef(({ className, href, children }, ref) => (
  <Link href={href}>
    <a ref={ref} className={className}>
      {children}
    </a>
  </Link>
))

CustomLink.displayName = 'CustomLink'

CustomLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const LinkButton = ({ href, children, color }) => (
  <Button href={href} component={CustomLink} variant="contained" color={color}>
    {children}
  </Button>
)

LinkButton.propTypes = {
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LinkButton
