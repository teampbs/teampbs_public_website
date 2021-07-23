import { FC } from 'react'

import { InputLabel, InputCustom, FormGroup } from 'components/shared/styles'
import useForm from 'Hooks/useForm'

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
  const { handleChange } = useForm()

  return (
    <FormGroup ml={ml} column={column} just={just}>
      <InputLabel nowrap={nowrap} htmlFor={id}>{label}</InputLabel>
      <InputCustom {...props} name={props.id} onChange={handleChange} />
      {second && <InputCustom {...props} name={props.id} onChange={handleChange} />}
    </FormGroup>
  )
}

export default Input
