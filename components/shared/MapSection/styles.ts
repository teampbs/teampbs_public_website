import styled from '@emotion/styled'
import { mq } from 'styles/styles'

import { colors } from 'utils/constants'

export const Countries = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '25px 0 0 0',
  gap: '1rem',
  width: 345,
  height: '100%',
  textAlign: 'left',
  fontSize: '1.5rem',
  overflow: 'hidden',
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

export const style = {
  wrapper: {
    color: colors.black00,
    textAlign: 'center',
    width: '100%',
    background: colors.blueMild,
    padding: '5rem 0',
  },
  sidebar: {
    container: mq({
      display: 'flex',
      flexDirection: 'column' as const,
      margin: '25px 0 0 0',
      gap: '1rem',
      minWidth: ['80%', '80%', '80%', '20%'],
      maxHeight: '700px',
      textAlign: 'left',
      fontSize: '1.5rem',
      overflow: 'auto',
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        background: colors.gray,
      },
      '::-webkit-scrollbar-thumb ': {
        background: 'rgba(36,44,55,0.1)',
      },
    }),
    img: {
      width: '.8rem',
      height: '.8rem',
      transform: 'rotate(90deg)',
    },
    name: { cursor: 'pointer', color: colors.black10 }
  },
  heading: {
    fontSize: '2.25rem',
    fontWeight: 700
  },
  row: mq({
    display: 'flex',
    height: 'auto',
    margin: 'auto',
    padding: '2.5rem',
    flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
    width: ['100%', '100%', '100%', '80%'],
    alignItems: ['center', 'center', 'center', 'stretch'],
  }),
  link: {
    color: colors.lightBlue,
    marginLeft: '.5rem',
    cursor: 'pointer',
    background: `url(/images/shared/right_arrow_blue.png) no-repeat`,
    backgroundPosition: '100% 50%',
    paddingRight: '1rem',
  }
}