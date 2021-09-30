import { FC } from 'react'

import { InputLabel, InputCustom, FormGroup } from 'components/shared/styles'

interface IInput {
  type: string
  placeholder: string
  half: boolean
  value: string | number
  id: string
  label: string
  second: boolean
  nowrap: boolean
  column: boolean
  ml: boolean
  just: string
}

const Input: FC<Partial<IInput>> = (props) => {
  const { id, label, second, nowrap, column, ml, just } = props

  return (
    <FormGroup ml={ml} column={column} just={just}>
      <InputLabel nowrap={nowrap} htmlFor={id}>{label}</InputLabel>
      <InputCustom {...props} name={props.id} />
      {second && <InputCustom {...props} name={props.id} />}
    </FormGroup>
  )
}

export default Input
