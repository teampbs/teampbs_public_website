import { FC } from 'react'

import { Wrapper, Area } from 'components/shared/styles'
import useForm from 'Hooks/useForm'

interface P {
  id: string
  label: string
  height: string | number
}

const Textarea: FC<P> = ({ id, label, height }) => {
  const { handleChange } = useForm()

  return (
      <Wrapper>
        <label htmlFor={id}>{label}</label>
        <Area height={height} name={id} id={id} onChange={handleChange} />
        <p>HINT: you may copy/paste from a word processor program.</p>
      </Wrapper>
  )
}

export default Textarea
