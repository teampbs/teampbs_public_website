import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

export const details_style = {
  title: { paddingBottom: 25, fontSize: 32, color: colors.black10 },
  subtitle: { paddingBottom: 30, fontSize: 20, color: colors.black10 },
  p: { fontSize: '13px', marginBottom: '35px', color: colors.darkGray },
  description: { color: colors.darkGray },
  date: { fontSize: '.875rem', color: colors.darkGray },
  social: { display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.875rem', color: colors.darkGray },
  img: { height: '12px' },
  breadcrumb: {
    fontSize: '14px',
    padding: '.5rem',
    marginRight: 'auto',
    color: colors.lightGray,
    cursor: 'pointer',
    '& img': {
      display: 'inline',
      paddingRight: 20,
    },
  }
}

export const style = {
  title: {
    padding: '0 0 25px',
    fontSize: '24px',
    color: colors.black10,
  },
  dateTitle: {
    padding: '2rem 0',
    fontSize: '20px',
    color: colors.black10,
    '@media (max-width: 960px)': {
      fontSize: 14,
      margin: '0 auto',
      color: colors.lightBlue,
      padding: '0 0 15px',
      cursor: 'pointer',
    }
  },
  dateInfo: {
    margin: '15px 0 0 0',
    color: colors.darkGray,
    fontSize: '13px',
  },
  picker: {
    '@media (max-width: 960px)': {
      width: '50%',
      height: '100%'
    },
    '& .react-datepicker': {
      background: colors.blueMild,
      border: 'none',
      boxShadow: 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px',
      maxWidth: 350,
      '@media (max-width: 1400px)': {
        width: 250
      }
    },
    '& .react-datepicker__header': {
      background: colors.blueMild,
      borderBottom: 'none',
    },
    '& .react-datepicker__month': {
      width: 350,
      '@media (max-width: 1400px)': {
        width: 250
      }
    },
    '& .react-datepicker__day, .react-datepicker__day-name': {
      width: '45px',
      color: colors.darkGray,
      margin: '.5rem 0',
      '@media (max-width: 1400px)': {
        width: 30
      }
    },
    '& .react-datepicker__day--selected': {
      color: colors.white,
      fontWeight: 700
    },
    '& .react-datepicker__current-month': {
      color: colors.darkGray,
      marginBottom: '1rem',
    }
  },
}

export const OuterFlexMq = mq({
  flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'],
  alignItems: ['center', 'center', 'flex-start', 'flex-start'],
  margin: ['auto', 'auto', '0', '0'],
  padding: ['100px 5%', '100px 10%', '100px 10%', '100px 10%'],
})

export const InnerFlexMq = mq({
  width: ['100%', '100%', '70%', '70%']
})

export const OuterFlexDetailsMq = mq({
  flexDirection: ['column', 'column', 'row', 'row'],
  margin: ['auto', 'auto', '0', '0'],
  padding: ['100px 5%', '100px 10%', '100px 10%', '100px 10%']
})

export const InnerFlexDetailsMq = mq({
  margin: ['auto', 'auto', '0', '0'],
  width: ['100%', '100%', '50vw', '50vw']
})

export const OtherNewsMq = mq({ width: ['100%', '100%', '30%', '30%'] })