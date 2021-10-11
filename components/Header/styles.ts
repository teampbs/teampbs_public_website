import { Interpolation, Theme } from '@emotion/react'
import styled from '@emotion/styled'

import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

export const styles = {
  navLink: mq({
    minWidth: '100px',
    position: 'relative',
    marginLeft: 10,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: 18,
    lineHeight: '46px',
    fontWeight: 600,
    padding: '0 1rem',
    transition: 'color 0.3s',
    '& .link:hover': {
      color: colors.lightBlue,
      transition: 'color 0.3s',
    },
    flexGrow: 1,
    display: ['none', 'none', 'none', 'block'],
  }),
  iconDown: {
    position: 'relative',
    ':before': {
      content: "''",
      position: 'absolute',
      left: 30,
      width: 15,
      height: '100%',
      backgroundImage: 'url(/images/pages/Index/nav_down_sticky.png)', 
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
    }
  },
  iconUp: {
    position: 'relative',
    ':before': {
      content: "''",
      position: 'absolute',
      left: 30,
      width: 15,
      height: '100%',
      backgroundImage: 'url(/images/pages/Index/nav_up_sticky.png)',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
    }
  },
  sideNavLink: mq({
    minWidth: '100px',
    position: 'relative',
    marginRight: 'auto',
    paddingLeft: 50,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: 18,
    lineHeight: '46px',
    fontWeight: 600,
    display: 'flex',
    color: colors.black20,
    ':hover': {
      color: colors.lightBlue,
      transition: 'color .3s linear',
    },
  }),
  '& .link:hover': {
    color: colors.lightBlue,
    transition: '.3s',
  },
  dropdownContainer: { 
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: '2.5rem',
    borderRadius: '0.375rem',
    width: '18rem',
    background: colors.white,
    padding: '0.625rem',
    boxShadow: '0px 10px 28px rgb(0 0 0 / 25%)' 
  } as Interpolation<Theme>,
  hide: {
    display: 'none',
  },
  headerLink: {
    color: colors.white,
    margin: '2rem 0',
    whiteSpace: 'nowrap',
    fontSize: 15,
    borderBottom: '1px solid #CCC',
    cursor: 'pointer',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      width: 5,
      height: '100%',
      right: -15,
      background: 'url(/images/shared/arrow_right.png) no-repeat',
      backgroundPosition: '100% 50%',
      opacity: '.5'
    }
  } as Interpolation<Theme>,
  video: mq({
    height: ['17rem', '50vh', '90vh', '90vh'],
    objectFit: 'cover',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    aspectRatio: '1 / 1',
  }),
  topNav: {
    link: {
      display: 'flex',
      marginLeft: 30,
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '.05rem',
      lineHeight: '38px',
      whiteSpace: 'nowrap',
      ':hover': {
        color: colors.lightBlue,
        transition: '1s',
      },
    } as Interpolation<Theme>
  },
  navBox: {
    display: 'flex',
    margin: ' 0 auto 0 -2rem',
  },
  fixed: mq({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
    background: colors.white,
    color: colors.black00,
    padding: ['1.5rem .5rem', '1.5rem .5rem', '2.5rem 3rem', '2.5rem 3rem'],
    width: '100%',
    position: 'fixed',
    zIndex: 150,
    transitionProperty: `background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDuration: '150ms',
    boxShadow: '0px 7px 12px rgb(100 100 100 / 10%)',
    top: 0,
    '& button': mq({
      fontSize: ['12px', '12px', '15px', '15px'],
      width: ['40px', '40px', '100%', '100%'],
      height: ['30px', '36px', '46px', '46px']
    })
  }),
  navTrack: mq({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: ['1.5rem', '1.5rem', '3rem', '3rem'],
    padding: ['0 .5rem', '0 .5rem', '0 3rem', '0 3rem'],
    height: '2rem',
    '& button': mq({
      fontSize: ['12px', '12px', '15px', '15px'],
      width: ['40px', '40px', '100%', '100%'],
      height: ['30px', '36px', '46px', '46px']
    })
  }),
  btnText: mq({
    fontSize: ['12px', '15px', '15px', '15px']
  })
}

export const Box = styled.div<{ bg?: boolean }>(({ bg }) => ({
  objectFit: 'cover',
  background: bg && colors.blueMild,
  width: '100%',
  height: 500,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
}))

export const Heading = styled.header<{ height: string, bg: string, black: boolean }>(props => ({
  width: '100%',
  objectFit: 'cover',
  top: '0',
  left: '0',
  color: props.black ? colors.black00 : colors.white,
  background: props.bg,
  height: props.height,
}))

export const HeadingImgMq = mq({
  height: ['440px', '440px', '500px', '500px'],
})

export const HeadingMq = mq({
  height: ['17rem', '50vh', '90vh', '90vh'],
})

export const Frame = styled.div({
  paddingRight: '.5rem',
  cursor: 'pointer',
  '& img': {
    color: colors.black00
  }
})

export const TopLeftLink = styled.a({
  fontSize: 13,
  lineHeight: '1.5',
  fontWeight: 400,
  letterSpacing: '.05rem',
  whiteSpace: 'nowrap',
})

export const Nav = styled.nav({
  position: 'relative',
  height: 38,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 32px',
  borderBottom: '1px solid rgba(255,255,255,0.3)',
  background: 'transparent'
})

export const Anchor = styled.a({
  display: 'flex',
  marginLeft: 30,
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '.05rem',
  lineHeight: '38px',
  whiteSpace: 'nowrap',
})

export const Disclaimer = styled.p<{ fs?: string; mw?: string; m?: string }>(
  ({ fs = '13', mw = null, m = '0' }) => ({
    fontSize: fs,
    textAlign: 'center',
    maxWidth: mw,
    margin: m,
  })
)

export const c = mq({ fontSize: ['12px', '12px', '15px', '15px'] })
