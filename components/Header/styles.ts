import { CSSObject } from '@emotion/react'
import styled from '@emotion/styled'

import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

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

export const Video = styled.video({
  objectFit: 'cover',
  width: '100vw',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
})

export const VideoMq = mq({
  height: ['50vh', '50vh', '90vh', '90vh'],
})

export const Heading = styled.header<{ height: string, bg: string, black: boolean }>(props => ({
  width: '100%',
  objectFit: 'cover',
  top: '0',
  left: '0',
  color: props.black ? colors.black00 : colors.white,
  background: props.bg,
  height: props.height
}))

export const HeadingImgMq = mq({
  height: ['440px', '440px', '500px', '500px'],
})

export const HeadingMq = mq({
  height: ['50vh', '50vh', '90vh', '90vh'],
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

export const style: CSSObject = {
  navBox: {
    display: 'flex',
    margin: ' 0 auto 0 -2rem',
  },
  fixed: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    background: colors.white,
    color: colors.black00,
    padding: '2.5rem 3rem',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    transitionProperty: `background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDuration: '150ms',
    boxShadow: '0px 7px 12px rgb(100 100 100 / 10%)',
    top: 0,
  },
  navTrack: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '3rem',
    padding: '0 3rem',
    height: '2rem',
  }
}