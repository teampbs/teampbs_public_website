import { Interpolation, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { mq } from 'styles/styles'

import { colors } from 'utils/constants'

export const style = {
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
      border: '1px solid #ddd',
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
      minWidth: 'calc(100% / 7)',
      height: '40px',
      fontSize: 12,
      textAlign: 'center',
    } as Interpolation<Theme>,
    cellHeader: {
      color: '#333',
      border: 0,
      height: 30,
      fontSize: 14,
      width: '100%',
      minWidth: 'calc(100% / 7)',
      position: 'relative',
      cursor: 'pointer',
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
      cursor: 'pointer',
    } as Interpolation<Theme>,
    checkLabel: mq({
      padding: ['0', '0', '1.25rem 0', '1.25rem 0'],
      width: '4rem',
      color: colors.textGray,
      paddingRight: 20,
    }),
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
    borderRadius: "50%",
    border: `10px solid ${colors.blueMild}`,
    width: 60,
    height: 60,
    color: colors.white
  } as Interpolation<Theme>,
  card_wrapper: mq({
    display: 'flex',
    justifyContent: 'space-between',
    background: colors.white,
    position: 'relative',
    width: ['90%', '90%', '90%', '70%'],
    padding: '2.5rem',
    marginBottom: '.5rem',
  }) as Interpolation<Theme>,
  heading: { fontWeight: 700, fontSize: '1.5rem', paddingBottom: '.75rem' },
  btn_wrapper: { height: '76px', '& button': { height: '100%', fontSize: '18px' } },
  centering: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } as Interpolation<Theme>,
  marked: {
    backgroundColor: '#cdedba',
    border: 'none',
    transition: 'all .4s cubic-bezier(.23, 1, .32, 1)',
    position: 'relative',
    ':after': {
      display: 'block',
      content: "''",
      backgroundImage: 'url(/images/shared/check.svg)',
      backgroundSize: '18px 18px',
      height: 18,
      width: 18,
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  } as Interpolation<Theme>,
  authorization: {
    disclaimer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      background: '#fffbe1',
      color: '#a27900',
      padding: '2rem',
      margin: '1rem 0',
      fontFamily: `Segoe UI WestEuropean, Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif`,
    } as Interpolation<Theme>,
    listItem: { padding: '.5rem 1rem' },
    list: { listStyleType: 'disc', margin: '0 1rem' },
    textWrap: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: '100%',
    } as Interpolation<Theme>,
    innerWrap: {
      display: 'flex',
      width: '100%',
      color: colors.textGray,
    },
    limiter: {
      width: '40%',
      opacity: 0,
    },
    btn: {
      margin: '1rem 0',
      width: 220,
      backgroundColor: colors.white,
      borderRadius: 46,
      height: 46,
      border: `1px solid ${colors.lightBlue}`,
      color: colors.lightBlue,
      cursor: 'pointer',
      transition: 'background 1s',
      whiteSpace: 'nowrap',
      outline: 'none',
      ':focus': {
        outline: 'none',
      },
    } as Interpolation<Theme>,
    box: {
      background: '#F2F2F2',
      width: '350px',
      height: '260px',
      paddingTop: '2.5rem',
    },
    sigWrap: {
      cursor: 'crosshair',
      border: `1px dashed ${colors.darkGray}`,
      width: 220,
      height: 75,
    },
    draw: { marginTop: '-2rem' },
    date: { textAlign: 'right' } as Interpolation<Theme>,
    cardFooter: { display: 'flex', justifyContent: 'space-between', fontWeight: 700 },
  },
  recaptchaWrapper: mq({
    display: 'inline-flex',
    flexDirection: 'row',
    width: '100%', gap: '1rem',
    margin: ['0 0 3rem 0', '0 0 3rem 0', '0 0 3rem 3.5rem', '0 0 3rem 3.5rem'],
    alignItems: 'baseline', '& > p': { paddingLeft: '1rem', borderLeft: '2px solid #666' }
  }) as Interpolation<Theme>,
}

export const Box = styled.div({
  background: colors.blueMild,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const Empty = styled.p({
  width: '40%',
  opacity: 0
})

export const FormGroup = styled.div<{ width?: string, align?: string, just?: string }>(({ width = '100%', align = 'center', just = 'flex-start' }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: just,
  top: just === 'flex-end' && 540,
  right: just === 'flex-end' && 0,
  textAlign: 'right',
  outline: 'none',
  width: width,
  '& > .outline:focus': {
    transition: 'box-shadow 0.3s',
    boxShadow: '0px 0px 1px 3px rgba(75, 178, 244, .5)',
    border: 'none',
    outline: 'none',
  },
  '& input[disabled]': {
    boxShadow: 'none',
    background: '#DDD',
  },
  '& input[disabled]:active': {
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
  },
}))

interface IInput { width: string, bg: boolean, radius: string }

export const Input = styled.input<Partial<IInput>>(props => ({
  height: '3rem',
  width: props.width ? props.width : '70%',
  border: `1px solid ${colors.blueGray}`,
  borderRadius: props.radius || 5,
  textAlign: 'left',
  paddingLeft: 10,
  outline: 'none',
  background: props.bg ? colors.gray : '',
}))

export const Label = styled.label<{ width?: string }>(props => ({
  minWidth: props.width || '30%',
  color: colors.textGray,
  paddingRight: 20,
}))

export const P = styled.p({
  paddingRight: 20,
  color: colors.textGray,
})

export const Info = styled.div<{ small?: boolean }>(props => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  width: props.small ? '20%' : '50%'
}))

export const Text = styled.p<{ red?: boolean }>(props => ({
  color: props.red ? colors.red : colors.textGray,
}))

export const ContainerForm = styled.form({
  paddingRight: 100,
  marginBottom: '10rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
})

export const Article = styled.div({
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
})

export const Button = styled.button<{ gray?: boolean }>(({ gray }) => ({
  borderRadius: 20,
  padding: '.5rem 1rem',
  fontSize: '14px',
  border: `1px solid ${gray ? colors.blueGray : colors.lightBlue}`,
  color: gray ? colors.black20 : colors.lightBlue,
  outline: 'none',
  appearance: 'none',
  transition: 'background 0.2s',
  whiteSpace: 'nowrap',
}))

export const Td = styled.td({
  display: 'table-cell',
  borderRight: '1px solid rgba(150, 159, 162, .15)',
  padding: '.5rem',
  width: '100%',
  height: '40px',
  fontSize: 12,
  textAlign: 'center',
})

export const Wrapper = styled.div({
  marginLeft: "6.5rem",
  '& button': {
    width: '50%'
  },
  '& button:focus': {
    outline: 'none',
  },
})

export const Legend = styled.label<{ margin?: string }>(props => ({
  color: colors.textGray,
  width: '180%',
  whiteSpace: 'nowrap',
  textAlign: 'right',
  marginRight: props.margin
}))