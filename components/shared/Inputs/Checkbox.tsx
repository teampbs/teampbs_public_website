import { FC } from 'react'

import useForm from 'Hooks/useForm'
import { CheckWrapper, CheckLabel, Input } from 'components/shared/styles'
interface P {
  id: string
  label: string
  bg?: boolean
  ml?: number | string
}

const Checkbox: FC<P> = ({ id, label, bg, ml }) => {
  const { handleChange } = useForm()

  return (
    <CheckWrapper ml={ml} bg={bg}>
      <CheckLabel
        css={
          id === 'permission' && {
            textAlign: 'left',
            width: '80%',
            whiteSpace: 'normal',
          }
        }
        htmlFor={id}
      >
        {label}
      </CheckLabel>
      <Input name={id} type='checkbox' id={id} onChange={handleChange} />
    </CheckWrapper>
  )
}

export default Checkbox
