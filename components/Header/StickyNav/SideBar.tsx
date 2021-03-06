import { Interpolation, Theme } from '@emotion/react'
import { useState } from 'react'

import Button from 'components/shared/Button'
import Logo from 'components/Header/Logo'
import { navs } from 'components/Header/StickyNav/nav_mocks'
import { styles } from 'components/Header/styles'
import { colors } from 'utils/constants'
import { mq } from 'styles/styles'
import DropdownLink from 'components/Header/StickyNav/DropdownLink'

const buttons = [
  { title: 'Find RBT Training', src: 'docs', alt: 'docs' },
  {
    title: 'Parent Portal Login',
    src: 'profile',
    alt: 'portal',
  },
  { title: 'Team PBS login', src: 'profile', alt: 'team' },
]

const Controller = mq({
  display: 'flex',
  flexDirection: ['column', 'column', 'column', 'row'],
  color: 'rgba(36, 44, 55, 0.75)',
  fontSize: '18px',
  '& > button': {
    margin: 3,
    background: colors.gray,
    width: '100%',
    height: '100%',
    padding: '.2rem 0',
    color: colors.black10,
    border: `1px solid ${colors.gray}`,
    transition: 'all 1s',
    ':hover': {
      background: '#d7d9db',
    },
  },
})

const sidebarStyle = mq({
  boxShadow: '0px 7px 12px rgb(100 100 100 / 7%)',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
  position: 'fixed',
  inset: 0,
  backgroundColor: 'white',
  width: ['100%', 350, 350, 350],
  height: '100%',
}) as Interpolation<Theme>

const closeIcon = {
  position: 'absolute',
  top: 45,
  right: 45,
  width: '20px',
  height: '20px',
  background: 'url(/images/close.png) no-repeat',
  backgroundSize: '20px 20px',
  cursor: 'pointer',
} as Interpolation<Theme>

const sidebarContent = {
  display: 'flex',
  flexDirection: 'column',
  color: 'rgba(36, 44, 55, 0.75)',
  height: '100%',
  width: '100%',
  zIndex: 999,
  '& .sidebar_css': {
    paddingLeft: '1.5rem',
  },
} as Interpolation<Theme>

const SideBar = ({ width, setSidebar }) => {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle4, setToggle4] = useState(false)
  const [toggle5, setToggle5] = useState(false)

  const clearAll = () => {
    setToggle1(false)
    setToggle2(false)
    setToggle4(false)
    setToggle5(false)
  }

  return (
    <div css={width > 1383 ? { display: 'none' } : sidebarStyle}>
      <Logo
        isLogo
        src={'/images/logo_main_fix.png'}
        alt='logo'
        width={'140'}
        height={'40'}
        link='/'
      />
      <div css={closeIcon} onClick={setSidebar} />
      <div css={sidebarContent}>
        <a
          css={[styles.sideNavLink, toggle1 ? styles.iconUp : styles.iconDown]}
          onClick={() => {
            clearAll()
            toggle1 ? setToggle1(false) : setToggle1(true)
          }}
        >
          {navs[0].title}
        </a>
        {toggle1 &&
          navs[0].links.map((link, index) => (
            <DropdownLink
              key={index}
              parentId={link.parentId}
              href={link.href}
              title={link.title}
            />
          ))}
        <a
          css={[styles.sideNavLink, toggle2 ? styles.iconUp : styles.iconDown]}
          onClick={() => {
            clearAll()
            toggle2 ? setToggle2(false) : setToggle2(true)
          }}
        >
          {navs[1].title}
        </a>
        {toggle2 &&
          navs[1].links.map((link, index) => (
            <DropdownLink
              key={index}
              parentId={link.parentId}
              href={link.href}
              title={link.title}
            />
          ))}
        <a css={styles.sideNavLink}>{navs[2].title}</a>
        <a
          css={[styles.sideNavLink, toggle4 ? styles.iconUp : styles.iconDown]}
          onClick={() => {
            clearAll()
            toggle4 ? setToggle4(false) : setToggle4(true)
          }}
        >
          {navs[3].title}
        </a>
        {toggle4 &&
          navs[3].links.map((link, index) => (
            <DropdownLink
              key={index}
              parentId={link.parentId}
              href={link.href}
              title={link.title}
            />
          ))}
        <a
          css={[styles.sideNavLink, toggle5 ? styles.iconUp : styles.iconDown]}
          onClick={() => {
            clearAll()
            toggle5 ? setToggle5(false) : setToggle5(true)
          }}
        >
          {navs[4].title}
        </a>
        {toggle5 &&
          navs[4].links.map((link, index) => (
            <DropdownLink
              key={index}
              parentId={link.parentId}
              href={link.href}
              title={link.title}
            />
          ))}
      </div>
      <div
        css={[
          Controller,
          width < 900
            ? { width: '100%', '& button': { padding: '.5rem 0' } }
            : { width: '100%', '& button': { padding: '1rem 0' } },
        ]}
      >
        {buttons.map((btn, index) => (
          <Button key={index}>
            <span
              css={{
                ':before': {
                  content: "''",
                  background:
                    `url(/images/nav_${btn.src}_dark.png) no-repeat center left`,
                  paddingLeft: '1.5rem',
                  opacity: 0.25,
                },
              }}
            >
              {btn.title}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SideBar
