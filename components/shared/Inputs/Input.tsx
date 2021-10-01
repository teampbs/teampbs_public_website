import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { InputLabel, InputCustom, FormGroup } from 'components/shared/styles'
import { requiredInputs } from 'utils/mock/validation'
import useWindowDimensions from '@hooks/useWindowsDimensions'

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
  injectCss: any
  secondDisabled: boolean
}

const errorStyle = { color: 'red', paddingTop: '.2rem', marginLeft: '2rem' }

const Input: FC<Partial<IInput>> = (props) => {
  const { id, label, second, nowrap, column, ml, just, secondDisabled } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { width } = useWindowDimensions()

  return (
    <div css={props?.injectCss}>
      <FormGroup ml={ml} column={column || width < 900} align={column || width < 900 ? 'flex-start' : 'center'} just={just}>
        <InputLabel nowrap={nowrap} htmlFor={id}>
          {label}
        </InputLabel>
        <InputCustom
          {...props}
          name={props.id}
          {...register(
            id,
            requiredInputs.includes(id) && { required: 'Required' }
          )}
        />
        {second && (
          <InputCustom
            disabled={secondDisabled}
            {...props}
            name={`second_${id}`}
            {...register(
              id,
              requiredInputs.includes(id) && { required: 'Required' }
            )}
          />
        )}
      </FormGroup>
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <p
            className='errMsg'
            css={[
              errorStyle,
              errors.hours && id === 'hours' && { marginLeft: '21rem' },
            ]}
          >
            {message}
          </p>
        )}
      />
    </div>
  )
}

export default Input
