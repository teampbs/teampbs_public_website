import { FC, useState } from 'react'
import Link from 'next/link'

import Button from 'components/shared/Button'
import Logo from 'components/Header/Logo'
import { navs } from 'components/Header/StickyNav/nav_mocks'
import NavLink from 'components/Header/StickyNav/NavLink'
import { styles } from 'components/Header/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import SideBar from 'components/Header/StickyNav/SideBar'

interface IStickyNav {
  scrolling: boolean
  black?: boolean
}

const StickyNav: FC<IStickyNav> = ({ scrolling, black }) => {
  const [sidebar, setSidebar] = useState(false)
  const { width } = useWindowDimensions()

  const toggleSidebar = () => setSidebar((prev) => !prev)

  return (
    <div css={[width < 400 && { '& :nth-child(2)#logo_middle': { margin: 0, background: `url(/images/logo_main_${scrolling ? 'fix' : 'hp'}_plain.png) left center/6rem 2rem no-repeat`, '& img[alt="logo_middle"]': { visibility: 'hidden' } } }, scrolling ? styles.fixed : styles.navTrack]}>
      <Logo
        src={
          scrolling ? '/images/shared/menu_fix.png' : '/images/shared/menu.png'
        }
        alt='menu icon'
        width='32'
        height='22'
        isScroll={scrolling}
        setSidebar={toggleSidebar}
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
        alt='logo_middle'
        width={scrolling ? '185' : '250'}
        height={scrolling ? '40' : '50'}
        isScroll={scrolling}
        link='/'
      />
      {sidebar && (
        <SideBar width={width} setSidebar={toggleSidebar} />
      )}
      <div css={styles.navBox}>
        {navs.map((link) => (
          <NavLink
            key={link.id}
            title={link.title}
            links={link.links}
            isEmpty={link.isEmpty}
            isSticky={scrolling}
          />
        ))}
      </div>
      <Link href='/request-aba-services'>
        <a css={width < 500 && { '& > button': { minWidth: '7rem', margin: 0, padding: 0 }}}>
          <Button isScroll={scrolling} navBtn>
            {width < 500 ? 'ABA Therapy' : 'Request ABA Therapy'}
          </Button>
        </a>
      </Link>
    </div>
  )
}

export default StickyNav
