import styled from '@emotion/styled'

import { colors } from 'utils/constants'

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

export const Circle = styled.div({
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
})

export const Text = styled.p<{ red?: boolean }>(props => ({
  color: props.red ? colors.red : colors.textGray,
}))

export const ContainerForm = styled.form({
  paddingRight: 100,
  width: '100%',
})

export const TableGrid = styled.table({
  maxHeight: '360px',
  overflow: 'scroll',
  
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

export const Tbody = styled.tr({
  maxWidth: '300px',
  '& tr:nth-child(odd)': {
    background: '#F8FCFC'
  }
})

export const Row = styled.tr({
  display: 'flex',
})

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