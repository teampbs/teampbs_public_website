import { Interpolation, Theme } from '@emotion/react'

import { colors } from 'utils/constants'

export const style = {
  section: {
    background: colors.blueMild,
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    margin: 'auto',
    padding: '5rem',
    width: '100%',
  },
  article: {
    maxWidth: 650,
  },
  title: {
    fontWeight: 700,
    fontSize: '2.25rem',
  },
  text: {
    display: 'flex',
    marginBottom: '40px',
    background: `url(/images/pages/careers/open-positions-icon.png) no-repeat left center`,
    backgroundSize: '60px 50px',
    padding: '2rem 0 0 6rem',
    color: colors.textGray,
  },
  slider: {
    arrows: { 
      position: 'relative', 
      display: 'flex',
      ':before': {
        content: `''`,
        position: 'absolute',
        width: '.75rem',
        height: '1.25rem',
        right: 100,
        background: 'url(/images/pages/careers/prev.png) no-repeat',
      },
      ':after': {
        content: `''`,
        position: 'absolute',
        width: '.75rem',
        height: '1.25rem',
        right: 50,
        background: 'url(/images/pages/careers/next.png) no-repeat',
      } 
    } as Interpolation<Theme>,
    qoute: { '::first-letter': { marginLeft: '3rem' }, paddingTop: '2.5rem', background: 'url(/images/pages/careers/quote.png) no-repeat', backgroundPosition: '0 40%' },
    dot: { height: '1.25rem', width: '1.25rem' },
    title: { fontSize: '1.875rem', fontWeight: 700 },
    wrapper: { display: 'flex', justifyContent: 'space-between', padding: '.75rem 0' },
    flex: { display: 'flex' },
    padding: { padding: '.75rem 0' }
  }
}