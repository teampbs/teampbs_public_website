import { ErrorMessage } from '@hookform/error-message'
import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'
import { useFormContext } from 'react-hook-form'

import { FormGroup, Input, Label } from 'components/SelectYourRegion/styles'
import Qualification from 'components/SelectYourRegion/Field/Qualification'
import Select from 'components/shared/Inputs/Select'
import { IField } from 'interfaces'
import { requiredInputs } from 'utils/mock/validation'

const inputWrap = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-start',
} as Interpolation<Theme>

const Field: FC<Partial<IField>> = ({
  width,
  id,
  label,
  type,
  placeholder,
  disabled,
  select,
  labelWidth,
  maxLength,
  list,
  value,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormGroup
      align='flex-start'
      className={id === 'zip' && 'relative'}
      just={id === 'zip' && 'flex-end'}
      width={id === 'zip' ? '40%' : '100%'}
      css={(errors.city && id === 'zip') ? { top: -82, left: 250 } : id === 'zip' && { top: -55, left: 250 }}
    >
      <Label
        css={{ marginTop: '.8rem' }}
        className={id === 'qualification' && 'align-self-start'}
        htmlFor={id}
        width={labelWidth}
      >
        {label}
      </Label>
      {id === 'qualification' ? (
        <Qualification width={width} />
      ) : select ? (
        <Select id={id} list={list} margin='0' half />
      ) : (
        <div
          css={inputWrap}
        >
          <Input
            width={id === 'zip' ? '40%' : width}
            id={id}
            name={id}
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            bg={id === 'date_app'}
            className='border border-blue-300 outline'
            {...register(
              id,
              requiredInputs.includes(id) && { required: 'Required' }
            )}
          />
          <ErrorMessage
            errors={errors}
            name={id}
            render={({ message }) => (
              <p css={{ color: 'red', paddingTop: '.2rem' }}>{message}</p>
            )}
          />
        </div>
      )}
    </FormGroup>
  )
}

Field.defaultProps = {
  type: 'text',
  disabled: false,
  labelWidth: '30%',
  maxLength: 255,
  width: '100%'
}

export default Field
