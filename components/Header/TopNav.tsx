
import Link from 'next/link'

import Logo from 'components/Header/Logo'
import { Nav, TopLeftLink, Anchor } from 'components/Header/styles'
import Flexbox from 'components/shared/Flexbox'
import { mq } from 'styles/styles'

const links = [
  {
    href: '/upcoming-events',
    src: '/images/nav_docs.png',
    name: 'Find RBT Training',
    alt: 'docs',
  },
  {
    href: '/',
    src: '/images/nav_profile.png',
    name: 'Parent Portal Login',
    alt: 'portal_login',
  },
  {
    href: '/',
    src: '/images/nav_profile.png',
    name: 'Team PBS Log In',
    alt: 'pbs_login',
  },
]

const TopNav = () => (
  <Nav
    css={mq({
      display: ['none', 'none', 'none', 'flex'],
    })}
  >
    <Link href='/'>
      <TopLeftLink>Leaders in Applied Behavior Analysis</TopLeftLink>
    </Link>
    <Flexbox justify='flex-end'>
      {links.map(({ href, src, alt, name }) => (
        <Link key={alt} href={href}>
          <Anchor>
            <Logo isLogo src={src} alt={alt} width={15} height={15} />
            {name}
          </Anchor>
        </Link>
      ))}
    </Flexbox>
  </Nav>
)

export default TopNav
