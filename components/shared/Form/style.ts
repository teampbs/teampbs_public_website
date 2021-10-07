import { CSSObject, Interpolation, Theme } from '@emotion/react'
import { colors } from 'utils/constants'

export const style = {
  // styles for all form elements
  form: {
    container: {
      paddingRight: 100,
      width: '100%',
    },
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      background: colors.lightBlue,
      position: 'absolute',
      top: 40,
      left: -30,
      borderRadius: '50%',
      border: `10px solid ${colors.blueMild}`,
      width: 60,
      height: 60,
      color: colors.white
    } as Interpolation<Theme>,
    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      width: '50%'
    } as Interpolation<Theme>,
    text: { color: colors.textGray },
    textRed: { color: colors.red },
    title: {
      fontWeight: 700,
      paddingBottom: '.75rem',
      fontSize: '1.5rem',
    }
  },
  // style for table
  table: {
    article: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      '& input[type=number]:focus': {
        transition: 'box-shadow 0.3s',
        boxShadow: '0px 0px 1px 3px rgba(75, 178, 244,0.5)',
        border: 'none',
        outline: 'none',
      },
      '& button:focus': {
        outline: 'none',
      },
      '& button:hover': {
        background: colors.blueGray,
        borderColor: colors.blueBorder,

      }
    },
    label: {
      padding: '1.25rem 0',
      minWidth: '30%',
      color: colors.textGray,
      paddingRight: 20,
    },
    input: {
      height: '3rem',
      width: '10%',
      border: `1px solid ${colors.blueGray}`,
      borderRadius: 5,
      textAlign: 'left',
      padding: '.5rem .5rem .5rem 10px',
      outline: 'none',
    } as Interpolation<Theme>,
    tbody: {
      overflow: 'auto',
      height: '360px',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 2rem 0',
      '& tr:nth-of-type(odd)': {
        background: '#F8FCFC',
      },
    } as Interpolation<Theme>,
    row: {
      display: 'flex',

    },
    cell: {
      display: 'table-cell',
      borderRight: '1px solid rgba(150, 159, 162, .15)',
      padding: '.5rem',
      width: '100%',
      height: '40px',
      fontSize: 12,
      textAlign: 'center',
    } as Interpolation<Theme>,
    footer_text: { color: colors.textGray, fontSize: '0.875rem' },
    thead: {
      row: { display: 'flex', borderWidth: 1 },
      cell: { marginLeft: '1rem', fontWeight: 700, width: '100%' },
    } as Interpolation<Theme>,
    text: {
      color: colors.textGray
    },
    buttons: { display: 'flex', gap: '.5rem' },
    btn: {
      borderRadius: 20,
      padding: '.5rem 1rem',
      fontSize: '14px',
      border: `1px solid ${colors.blueGray}`,
      color: colors.black20,
      outline: 'none',
      appearance: 'none',
      transition: 'background 0.2s',
      whiteSpace: 'nowrap',
    } as Interpolation<Theme>,
    checkbox: {
      height: '3rem',
      width: '1rem',
      border: `1px solid ${colors.blueGray}`,
      borderRadius: 5,
      textAlign: 'left',
      padding: '.5rem .5rem .5rem 10px',
      outline: 'none',
    } as Interpolation<Theme>,
    checkLabel: {
      padding: '1.25rem 0',
      width: '4rem',
      color: colors.textGray,
      paddingRight: 20,
    },
  },
  // if style is sharable move upper in abstraction
  request: {
    card: {
      borderRadius: 5,
      display: 'flex',
      background: colors.white,
      justifyContent: 'space-between',
      position: 'relative',
      padding: '2.5rem',
      width: '70%',
      margin: '0 0 1rem 0',
    } as CSSObject,
    btnWrap: {
      height: '76px',
      '& button': { height: '100%', fontSize: '18px' },
    } as CSSObject
  }

}