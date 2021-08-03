import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

export const style = {
  subtitle_link: {
    margin: '1rem auto',
    fontSize: 10,
    color: colors.lightGray,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  title: { fontSize: '44px' },
  backLink: {
    display: 'inline-flex',
    fontSize: '14px',
    padding: '.5rem',
    marginRight: 'auto',
    paddingLeft: '20px',
    color: colors.lightGray,
    cursor: 'pointer',
    background: 'url(/images/pages/LatestNews/grey_back_arrow.png) no-repeat left',
  },
  outerWrapper: mq({
    flexDirection: ['column', 'column', 'row', 'row'],
    margin: ['auto', 'auto', '0', '0'],
    padding: ['100px 5%', '100px 10%', '100px 10%', '100px 10%'],
  }),
  innerWrapper: mq({
    margin: ['auto', 'auto', '0', '0'],
    width: ['100%', '100%', '50%', '50%'],
  }),
  coordinators: {
    wrapper: mq({ gap: '5rem', items: 'flex-start', margin: '2rem', width: ['100%', '100%', '50%', '50%'] }),
    title: {
      paddingBottom: 30,
      fontSize: 25,
      color: colors.black10,
      marginLeft: '2.5rem',
    },
    body: {
      marginTop: '5rem 2.5rem 2.5rem',
      background: colors.white,
      position: 'relative',
      height: '350px',
      width: '340px',
      padding: '3rem',
    },
    image: { borderRadius: '50%' },
    email: {
      margin: '0 .5rem',
      textDecoration: 'underline',
      '& a:hover': {
        textDecoration: 'none',
      },
    },
    location: {
      display: 'flex',
      gap: '1rem',
      fontSize: '13px',
      color: colors.darkGray,
      padding: '.5rem 0 2.5rem 0',
    },
    nameWrapper: {
      height: '120px',
      width: '120px',
      position: 'absolute',
      top: -50,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    name: {
      fontWeight: 700,
      fontSize: '1.25rem',
      marginTop: '1rem',
    }
  },
}