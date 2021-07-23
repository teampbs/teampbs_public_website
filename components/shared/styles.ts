import styled from '@emotion/styled'

import { IFlex } from 'interfaces'
import { colors } from 'utils/constants'

export const InputCustom = styled.input<{ half?: boolean }>((props) => ({
  height: '3rem',
  width: props.half ? '33%' : '100%',
  border: `1px solid ${colors.blueGray}`,
  borderRadius: 5,
  textAlign: 'left',
  paddingLeft: 10,
  outline: 'none',
}))

export const Label = styled.label({
  minWidth: '30%',
  color: colors.textGray,
  textAlign: 'center',
  cursor: 'pointer',
})

export const InputLabel = styled.label<{ nowrap?: boolean }>(props => ({
  minWidth: props.nowrap ? '' : '30%',
  whiteSpace: props.nowrap ? 'nowrap' : null,
  color: colors.textGray,
  paddingRight: 20,
}))

export const Box = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 300,
  padding: '2rem',
  outline: 'none',
  width: '100%',
  gap: 10,
  border: `1px dashed ${colors.blueGray}`,
  '& input[type=file]': {
    width: '10rem',
    zIndex: 10,
    cursor: 'pointer',
    opacity: 0,
  },
})

export const Button = styled.button({
  position: 'absolute',
  top: 110,
  border: `1px solid ${colors.lightBlue}`,
  color: colors.lightBlue,
  borderRadius: 20,
  padding: '.5rem 1.5rem',
  fontSize: '16px',
  zIndex: 1,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
})

export const Area = styled.textarea<{ height: string | number }>(props => ({
  border: `1px solid ${colors.blueGray}`,
  borderRadius: 4,
  height: props.height,
}))

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  color: colors.textGray,
  width: '100%',
  marginLeft: 30,
  marginBottom: 40,
  textAlign: 'left',
  '& :focus': {
    transition: 'box-shadow 0.3s',
    boxShadow: '0px 0px 1px 3px rgba(75, 178, 244,0.5)',
    border: 'none',
    outline: 'none',
  }
})

export const SelectWrap = styled.div<{ margin?: string | number, half?: boolean }>(({ margin = 30, half }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'right',
  gap: '1rem',
  color: colors.textGray,
  outline: 'none',
  width: half ? '33%' : '100%',
  marginLeft: margin,
  '& select:focus': {
    transition: 'box-shadow 0.3s',
    boxShadow: '0px 0px 1px 3px rgba(75, 178, 244,0.5)',
    border: 'none',
    outline: 'none',
  },
}))

export const SelectField = styled.select({
  height: '44px',
  border: `1px solid ${colors.blueGray}`,
  borderRadius: 4,
  width: '100%',
  textAlign: 'left',
  outline: 'none',
})

export const Btn = styled.button<{ inverse?: boolean, padding?: string, width?: string, height?: string }>(props => ({
  fontSize: 15,
  fontWeight: 700,
  textAlign: 'center',
  verticalAlign: 'middle',
  backgroundColor: props.inverse ? 'transparent' : colors.lightBlue,
  padding: props.padding,
  minWidth: props.width,
  borderRadius: 46,
  height: props.height || 46,
  border: props.inverse ? `1px solid ${colors.lightBlue}` : 'none',
  color: props.inverse? colors.lightBlue : colors.white,
  cursor: 'pointer',
  transition: 'background 1s',
  whiteSpace: 'nowrap',
  outline: 'none',
  ':hover': {
    background: props.inverse? colors.white : colors.hoverBlue
  },
  ':focus': {
    outline: 'none'
  }
}))

export const Input = styled.input({
  height: '2rem',
  width: '1.5rem',
  outline: 'none',
})

export const CheckLabel = styled.label({
  color: colors.textGray,
  whiteSpace: 'nowrap',
})

export const CheckWrapper = styled.div<{ bg?: boolean, ml?: number | string }>(props => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'right',
  gap: '1rem',
  color: colors.textGray,
  outline: 'none',
  width: '100%',
  marginLeft: props.ml || 30,
  background: props.bg ? colors.gray : ''
}))

export const FlexWrap = styled.div<Partial<IFlex>>(
  ({ col, justify = 'center', items = 'center', gap = 0, width = '100%', margin, color, padding, background, height }) => ({
    display: 'flex',
    flexDirection: col ? 'column' : 'row',
    justifyContent: justify,
    alignItems: items,
    gap,
    width,
    height,
    margin,
    color,
    padding,
    background,
  })
)

export const Service = styled.div({
  background: colors.darkBlue,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.white,
  width: '100%',
  height: '24rem',
})

export const FormGroup = styled.div<{ align?: string, column?: boolean, ml?: boolean, just?: string }>(({ align = 'center', ml, column, just }) => ({
  display: 'flex',
  flexDirection: column ? 'column' : 'row',
  alignItems: align,
  justifyContent: just,
  textAlign: column ? 'left' : 'right',
  outline: 'none',
  width: '100%',
  gap: 10,
  marginLeft: ml ? 30 : null,
  '& > input:focus': {
    transition: 'box-shadow 0.3s',
    boxShadow: '0px 0px 1px 3px rgba(75, 178, 244,0.5)',
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
  '& input[type=file]': {
    border: 'none',
    textAlign: 'center',
  },
}))