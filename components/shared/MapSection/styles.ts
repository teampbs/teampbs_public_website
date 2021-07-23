import styled from '@emotion/styled'
import { mq } from 'styles/styles'

import { colors } from 'utils/constants'

export const Countries = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '2.5rem',
  gap: '1rem',
  overflowY: 'auto',
  width: 345,
  height: 256,
  textAlign: 'left',
  fontSize: '1.5rem',
})

export const Text = styled.p<{ mt?: boolean, size?: string }>(({ mt, size = '1rem' }) => ({
  color: colors.darkGray,
  marginTop: mt ? '1.25rem' : '',
  fontSize: size ? size : '',
}))

export const Heading = styled.h2({
  fontSize: '2.25rem',
  fontWeight: 700
})

export const Container = styled.div({
  color: colors.black00,
  textAlign: 'center',
  width: '100%',
  background: colors.blueMild,
  padding: '5rem 0',
})

export const SideBarItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const Arrow = styled.img({
  width: '.8rem',
  height: '.8rem',
  transform: 'rotate(90deg)'
})

export const Row = styled.div({
  display: 'flex',
  height: 'auto',
  margin: 'auto',
  width: '80%',
  padding: '2.5rem',
})

export const RowMq = mq({
  flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
  width: ['100%', '100%', '100%', '80%'],
  alignItems: ['center', 'center', 'center', 'stretch'],
})

export const BlueSpan = styled.span({
  color: colors.lightBlue
})

export const BoldLink = styled.a({
  fontWeight: 700
})