import styled from '@emotion/styled'
import { mq } from 'styles/styles'

import { colors } from 'utils/constants'

export const Track = styled.div({
  boxSizing: 'border-box',
  height: 76,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.black00,
  width: '100%',
  boxShadow: 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px',
  overflow: 'hidden',

  '& *': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 1rem',
    marginLeft: '1rem',
    display: 'flex',

    '& ::-webkit-scrollbar': {
      display: 'none'
    },

    '& ::-webkit-scrollbar-thumb': {
      background: 'transparent',
      border: 'none',
    },

    '& h3, p, a': {
      alignSelf: 'center'
    },
  },
  position: 'relative',
  flex: '0 0 100%',
})

export const Slide = styled.div({
  padding: '0 15rem',
  gap: '20px',
  width: '100%',
  position: 'relative',
  flex: '0 0 100%',
})

export const Text = styled.p({
  fontSize: 14,
  lineHeight: 22,
  color: 'rgba(36, 44, 55, 0.45)',
  fontWeight: 500,
  fontFamily: `'Roboto Slab', serif`,
  margin: 0,
  padding: '0 0 0 15',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

// * Media query

export const TrackMq = mq({
  boxShadow: ['none', 'none', 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px', 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px'],
  maxWidth: ['60%', '40%', '100%', '100%'],
  border: ['1px solid #ddd', '1px solid 3ddd', 'none', 'none'],
  margin: ['1rem 0 0 0', '1rem 0 0 0', '0', '0'],
})

export const Carousel__viewportMq = mq({
  padding: ['0', '0', '0 0 0 15', '0 0 0 15'],
})

export const SlideMq = mq({
  padding: ['0', '0', '0 15rem 0 15rem', '0 15rem 0 15rem'],
  display: []
})

export const NewsTitleMq = mq({
  padding: ['0', '0', '0 0 0 15', '0 0 0 15'],
  fontSize: ['1rem', '1rem', '1.25rem', '1.25rem'],
})

export const Counter = styled.div({
  width: 30,
  height: 30,
  border: `1px solid ${colors.lightBlue}`,
  color: colors.lightBlue,
  borderRadius: '50%',
  margin: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const box = mq({
  display: 'flex',
  flexDirection: ['column', 'row', 'row', 'row'],
  alignItems: ['center'],
  padding: ['2rem 0', '0 0 0 0', '0 0 2rem 0', '0 0 2rem 0'],
})

export const frame = mq({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: colors.blueMild,
  borderRadius: '100%',
  margin: ['0', '1rem 1rem 0 0', '1rem 1rem 0 0', '1rem 1rem 0 0'],
  padding: ['0', '1rem', '1rem', '1rem'],
})

export const aboutTitle = mq({
  marginTop: ['2rem', '1rem', '1rem', '1rem'],
  width: '100%',
  textAlign: ['center', 'left', 'left', 'left'],
})

export const AnchorLink = styled.a({
  alignSelf: 'end',
  fontSize: '15px',
  color: colors.lightBlue,
  fontWeight: 700,
})

export const style = {
  presentation: {
    wrapper: mq({
      display: 'flex',
      background: colors.black10,
      width: '100%',
      height: 775,
      flexDirection: ['column', 'column', 'column', 'row'],
      alignItems: ['center', 'center', 'center', 'center'],
      justifyContent: ['center', 'center', 'center', 'center'],
      padding: ['50px 0 50px 0', '50px 0 50px 0', '50px 0 50px 0', '115px'],
    }),
    header: mq({
      display: 'flex',
      gap: '1rem',
      marginRight: 'auto',
      color: colors.white,
      width: ['100%', '100%', '100%', '300px'],
      textAlign: ['center', 'center', 'center', 'left'],
      justifyContext: ['center', 'center', 'center', 'center'],
      alignItems: ['center', 'center', 'center', 'center'],
      flexDirection: ['column', 'column', 'column', 'column'],
      padding: ['0', '0', '0', '0 0 0 5rem'],
    }),
    video: { padding: '2rem', minWidth: '80%', minHeight: '400px' },
    inverseBtnWrap: mq({
      display: ['none', 'none', 'none', 'flex']
    }),
    btnWrap: mq({
      display: ['flex', 'flex', 'flex', 'none']
    }),
    title: mq({
      fontWeight: 700,
      fontSize: ['26px', '26px', '32px', '35px'],
    }),
    text: {
      fontSize: 16,
      padding: '.5rem 0'
    }
  },
  slider: {
    container: mq({ paddingTop: ['2rem', '2rem', '0', '0'], width: '100%', boxShadow: ['', '', 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px'] }),
    card: mq({
      display: 'flex',
      flexDirection: ['column', 'column', 'row', 'row'],
      alignItems: 'center',
      justifyContent: ['center', 'center', '', ''],
      gap: [0, 0, '2rem', '2rem'],
      height: ['100%', '100%', '76px', '76px'],
      maxWidth: ['280px', '280px', '100%', '100%'],
      margin: ['0 auto', '0 auto', 0, 0],
      padding: ['20px 0', '20px 0', '0', '0 250px'],
      border: ['1px solid #ddd', '1px solid #ddd', '0', '0'],
      borderRadius: 4,
      boxSizing: 'border-box',
    }),
    link: {
      color: colors.lightBlue,
      fontSize: '14px',
      paddingLeft: '16px',
      cursor: 'pointer'
    },
    text: mq({ fontSize: [12, 15, 15, 15], color: colors.black10, padding: '0 0 0 15' }),
    title: mq({
      fontWeight: 700,
      fontSize: [14, 20, 20, 20],
      fontFamily: `'Roboto Slab', serif`,
      margin: 0,
      padding: '0 0 0 15',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    })
  },
  works: {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '325px',
      maxWidth: '20%',
      minWidth: '250px',
      margin: '0 1rem',
      textAlign: 'center',
      '& > *': {
        margin: '1rem 0',
      }
    },
    counter: {
      width: 30,
      height: 30,
      border: `1px solid ${colors.lightBlue}`,
      color: colors.lightBlue,
      borderRadius: '50%',
      margin: '1rem 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 14,
      lineHeight: '23px',
      color: '#778597'
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '25px'
    },
    title: {
      fontSize: '35px',
      fontWeight: 700,
    },
    darkTitle: {
      color: colors.white,
      fontSize: 35,
      marginTop: '8rem',
    },
    section: mq({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
      paddingBottom: '10rem',
      width: '100%',
      padding: ['0 0 60px 0', '0 0 60px 0', '0 0 94px 0', '0 0 94px 0']
    }),
    cardBox: mq({
      display: 'flex',
      justifyContent: 'center',
      padding: ['1rem 0', '1rem 0', '2rem 0', '2rem 10rem'],
      width: '100%',
      flexWrap: 'wrap',
    }),
    submit: { fontSize: 18, margin: 'auto' }
  },
  about: {
    container: mq({
      display: 'flex',
      color: colors.black00,
      maxWidth: ['100%', '100%', '70%', '70%'],
      flexDirection: ['column', 'column', 'row', 'row'],
      margin: ['1rem auto', '1rem auto', '3rem auto', '3rem auto'],
      padding: ['0 2rem', '0 2rem', '', ''],
    }),
    article: mq({
      display: 'flex',
      flexDirection: 'column',
      width: ['100%', '650px', 650, 650],
      fontSize: '19px',
      '& > p': {
        lineHeight: '31px',
        fontSize: '16px',
      },
      gap: [10, 10, 50, 50],
      padding: ['1rem 0', '1rem 0', '2rem', '2rem'],
    }),
    text: mq({
      fontSize: ['14px', '14px', '16px', '16px'],
    }),
    link: {
      alignSelf: 'end',
      fontSize: '15px',
      color: colors.lightBlue,
      fontWeight: 700,
    }
  }
}