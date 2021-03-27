import React from 'react'
import Link from 'next/link'
import MButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const LinkButton = React.forwardRef(({ className, href, children }, ref) => (
  <Link href={href}>
    <a ref={ref} className={className}>
      {children}
    </a>
  </Link>
))

LinkButton.displayName = 'LinkButton'

LinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Button = ({ href, children, color }) => (
  <MButton href={href} component={LinkButton} variant="contained" color={color}>
    {children}
  </MButton>
)

Button.propTypes = {
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
