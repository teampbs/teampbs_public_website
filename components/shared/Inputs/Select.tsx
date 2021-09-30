import React, { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { SelectWrap, SelectField } from 'components/shared/styles'
import { requiredInputs } from 'utils/mock/validation'

const Select: FC<{
  id: string
  list: string[]
  margin?: string | number
  half?: boolean
}> = ({ id, list, margin, half }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <SelectWrap css={((errors.degrees && id === 'degrees') || (errors.county && id === 'county')) && { flexDirection: 'column', gap: '.5rem', alignItems: 'flex-start'}} margin={margin} half={half}>
      <SelectField
        name={id}
        className={half && 'px-2'}
        id={id}
        {...register(
          id,
          requiredInputs.includes(id) && { required: 'Required' }
        )}
      >
        {React.Children.toArray(
          list.map((item: string) => <option value={item}>{item}</option>)
        )}
      </SelectField>
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <p css={{ color: 'red' }}>{message}</p>
        )}
      />
    </SelectWrap>
  )
}

export default Select
