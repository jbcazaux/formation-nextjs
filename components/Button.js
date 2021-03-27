import Link from 'next/link'
import MButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const LinkButton = ({ className, href, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)

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
