import { FC } from 'react'
import Link from 'next/link'

import Button from 'components/shared/Button'
import Logo from 'components/Header/Logo'
import { navs } from 'components/Header/StickyNav/nav_mocks'
import NavLink from 'components/Header/StickyNav/NavLink'
import { style } from 'components/Header/styles'

interface IStickyNav {
  scrolling: boolean
  black?: boolean
}

const StickyNav: FC<IStickyNav> = ({ scrolling, black }) => (
  <div
    css={scrolling ? style.fixed : style.navTrack}
  >
    <Logo
      src={
        scrolling ? '/images/shared/menu_fix.png' : '/images/shared/menu.png'
      }
      alt='menu icon'
      width='32'
      height='22'
      isScroll={scrolling}
    />
    <Logo
      isLogo
      src={
        scrolling
          ? '/images/logo_main_fix.png'
          : black
          ? '/images/logo_main_fix.png'
          : '/images/logo_main_hp.png'
      }
      alt='logo'
      width={scrolling ? '185' : '250'}
      height={scrolling ? '40' : '50'}
      isScroll={scrolling}
      link='/'
    />
    <div css={style.navBox}>
      {navs.map((link) => (
        <NavLink
          key={link.id}
          title={link.title}
          links={link.links}
          isEmpty={link.isEmpty}
        />
      ))}
    </div>
    <Link href='/request-aba-services'>
      <a>
        <Button isScroll={scrolling} navBtn>
          Request ABA Therapy
        </Button>
      </a>
    </Link>
  </div>
)

export default StickyNav
