import React from 'react'
import Link from 'next/link'
import MButton from '@material-ui/core/Button'

const LinkButton = ({ className, href, hrefAs, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)


const Button = ({ href, children, color }) => (
  <MButton href={href} component={LinkButton} variant="contained" color={color}>
    {children}
  </MButton>
)

export default Button