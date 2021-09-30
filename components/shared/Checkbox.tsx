import { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { CheckWrapper, styles } from 'components/shared/styles'
import { requiredInputs } from 'utils/mock/validation'
interface P {
  id: string
  label: string
  bg?: boolean
  ml?: number | string
}

const wrapLabels = [
  'permission',
  'req_check_payment',
]

const Checkbox: FC<P> = ({ id, label, bg, ml }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <CheckWrapper ml={ml} bg={bg}>
      <label
        css={[
          styles.checkLabel,
          wrapLabels.includes(id) && {
            textAlign: 'left',
            width: '80%',
            whiteSpace: 'normal',
          },
        ]}
        htmlFor={id}
      >
        {label}
      </label>
      <input css={styles.input} name={id} type='checkbox' id={id} {...register(id, requiredInputs.includes(id) && { required: 'Required' })} />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <p css={{ color: 'red', paddingTop: '.2rem' }}>{message}</p>
        )}
      />
    </CheckWrapper>
  )
}

export default Checkbox
