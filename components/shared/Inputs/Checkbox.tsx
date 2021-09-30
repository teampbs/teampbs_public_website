import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { CheckWrapper, styles } from 'components/shared/styles'
interface P {
  id: string
  label: string
  bg?: boolean
  ml?: number | string
}

const Checkbox: FC<P> = ({ id, label, bg, ml }) => {
  const { register } = useFormContext()

  return (
    <CheckWrapper ml={ml} bg={bg}>
      <label
        css={[id === 'permission' && styles.labelStyle, styles.checkLabel]}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        css={styles.input}
        name={id}
        type='checkbox'
        id={id}
        {...register(id)}
      />
    </CheckWrapper>
  )
}

export default Checkbox
