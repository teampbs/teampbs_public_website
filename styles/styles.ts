import styled from '@emotion/styled'
import facepaint from 'facepaint'

import { colors } from 'utils/constants'

const breakpoints = [ 768, 960, 1400, 1800 ]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

export const Anchor = styled.a<{ ml?: string }>(({ ml = 10 }) => ({
  marginLeft: ml,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 700,
}))

export const Play = styled.div({
  boxSizing: 'border-box',
  width: 10,
  height: 10,
  borderStyle: 'solid',
  borderWidth: '10px 0px 10px 15px',
  borderColor: `transparent transparent transparent ${colors.play}`,
  marginRight: 30,
})

export const AnchorBold = styled.a({
  minWidth: '100px',
  position: 'relative',
  marginLeft: 10,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontSize: 18,
  lineHeight: '46px',
  fontWeight: 600,
  padding: '0 1rem',
  '& .link:hover': {
    color: colors.lightBlue,
    transition: '1s',
  },
})

export const Title = styled.h1<{ size: number, height: number }>(props => ({
  fontWeight: 700,
  fontSize: props.size,
  height: props.height,
}))

export const Read = styled.a({
  color: colors.lightBlue,
  fontSize: '14px'
})

export const TextLink = styled.a({
  color: colors.white,
  margin: '2rem 0',
  fontSize: 15,
  borderBottom: '1px solid #CCC',
  cursor: 'pointer',
})

export const LinkBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 300,
})

export const Video = styled.video({
  objectFit: 'cover',
  width: '100vw',
  height: '90vh',
  position: 'absolute',
  top: 0,
  left: 0,
})

interface IText { width: string, size: string, padding: string, margin: string, bold: boolean, color: string }

export const Text = styled.p<Partial<IText>>(({ width = '100%', size = '1rem', padding = '0', margin = '0', bold, color }) => ({
  fontSize: size,
  fontWeight: bold ? 700 : 500,
  padding: padding,
  margin: margin,
  color: color,
  width: width,
}))
