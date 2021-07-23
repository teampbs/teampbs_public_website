/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Button from 'components/shared/Button'
import Logo from 'components/Header/Logo'
import { navs } from 'components/Header/StickyNav/nav_mocks'
import NavLink from 'components/Header/StickyNav/NavLink'

const stickyStyles = ' bg-white text-black00 py-10 w-full fixed z-50 transition'

interface IStickyNav {
  scrolling: boolean
}

const NavHolder = styled.div({
  display: 'flex',
  margin: ' 0 auto 0 -2rem',
})

const StickyNav: FC<IStickyNav> = ({ scrolling }) => (
  <div
    className={`flex justify-center items-center relative ${
      scrolling ? 'top-0' : 'top-12'
    } px-12 h-8 ${scrolling && stickyStyles}`}
  >
        <Logo
          src={
            scrolling
              ? '/images/shared/menu_fix.png'
              : '/images/shared/menu.png'
          }
          alt='menu icon'
          width='32'
          height='22'
          isScroll={scrolling}
        />
        <Logo
          isLogo
          src={
            scrolling ? '/images/logo_main_fix.png' : '/images/logo_main_hp.png'
          }
          alt='logo'
          width={scrolling ? '185' : '250'}
          height={scrolling ? '40' : '50'}
          isScroll={scrolling}
        />
    <NavHolder>
      {navs.map((link) => (
        <NavLink
          key={link.id}
          title={link.title}
          links={link.links}
          isEmpty={link.isEmpty}
        />
      ))}
    </NavHolder>
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
