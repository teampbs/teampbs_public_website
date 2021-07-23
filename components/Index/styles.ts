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

export const Read = styled.a({
  color: colors.lightBlue,
  fontSize: '14px',
  paddingLeft: '16px',
  cursor: 'pointer'
})

export const Slide = styled.div({
  padding: '0 15rem',
  gap: '20px',
  width: '100%',
  position: 'relative',
  flex: '0 0 100%',
})

export const NewsCard = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  height: '76px',
  width: '100%',
  margin: 0,
  padding: '0 250px',
})

export const NewsTitle = styled.a({
  fontWeight: 700,
  fontSize: 20,
  fontFamily: `'Roboto Slab', serif`,
  margin: 0,
  padding: '0 0 0 15',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
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

// * Presentation

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  background: colors.black10,
  width: '100%',
  height: 775,
  padding: 115,
})

export const WrapperMq = mq({
  flexDirection: ['column', 'column', 'column', 'row'],
  alignItems: ['center', 'center', 'center', 'center'],
  justifyContent: ['center', 'center', 'center', 'center'],
  padding: ['50px 0 50px 0', '50px 0 50px 0', '50px 0 50px 0', '115px'],
})

export const ShowOnSmall = mq({
  display: ['flex', 'flex', 'flex', 'none']
})

export const HideOnSmall = mq({
  display: ['none', 'none', 'none', 'flex']
})

export const Header = styled.header({
  display: 'flex',
  gap: '1rem',
  marginRight: 'auto',
  color: colors.white,
})

export const HeaderMq = mq({
  width: ['100%', '100%', '100%', '300px'],
  textAlign: ['center', 'center', 'center', 'left'],
  justifyContext: ['center', 'center', 'center', 'center'],
  alignItems: ['center', 'center', 'center', 'center'],
  flexDirection: ['column', 'column', 'column', 'column'],
  padding: ['0', '0', '0', '0 0 0 5rem'],
})

// * HowItWorks

export const Card = styled.div({
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
})

export const P = styled.p({
  fontSize: 14,
  lineHeight: '23px',
  color: '#778597'
})

export const Subtitle = styled.h2({
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '25px'
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

export const SectionBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'black',
  paddingBottom: '10rem',
  width: '100%',
})

export const SectionBoxMq = mq({
  padding: ['0 0 60px 0', '0 0 60px 0', '0 0 94px 0', '0 0 94px 0']
})

export const Title = styled.h1({
  fontSize: '35px',
  fontWeight: 700,
})

export const CardBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 15rem',
  width: '100%',
  flexWrap: 'wrap'
})

export const CardBoxMq = mq({
  alignItems: ['center', 'center', 'center', 'center'],
  // flexDirection: ['column', 'column', 'row', 'row'],
  // margin: ['1rem auto', '1rem auto', '3rem auto', '3rem auto'],
})

// * AboutSection

export const Box = styled.div({
  display: 'flex',
  paddingBottom: '2rem',
})

export const BoxMq = mq({
  paddingBottom: ['0', '0', '2rem', '2rem'],
})

export const Frame = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  background: colors.blueMild,
  borderRadius: '100%',
  margin: '1rem 1rem 0 0',
  padding: '1rem',
})

export const AboutTitle = styled.h4({
  marginTop: '1rem',
  width: '100%',
})

export const Container = styled.section({
  display: 'flex',
  color: colors.black00,
  maxWidth: '70%',
  margin: '3rem auto',
})

export const ContainerMq = mq({
  maxWidth: ['100%', '100%', '70%', '70%'],
  flexDirection: ['column', 'column', 'row', 'row'],
  margin: ['1rem auto', '1rem auto', '3rem auto', '3rem auto'],
})

export const Article = styled.article({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  width: 650,
  padding: '2rem',
  fontSize: '19px',
  '& > p': {
    lineHeight: '31px',
    fontSize: '16px',
  },
})

export const ArticleMq = mq({
  gap: [10, 10, 50, 50],
  padding: ['1rem 0', '1rem 0', '2rem', '2rem'],
})

export const AnchorLink = styled.a({
  alignSelf: 'end',
  fontSize: '15px',
  color: colors.lightBlue,
  fontWeight: 700,
})
