import { FC } from 'react'

import { FormGroup, Input, Label } from 'components/SelectYourRegion/styles'
import Qualification from 'components/SelectYourRegion/Field/Qualification'
import Select from 'components/shared/Select'
import useForm from 'Hooks/useForm'
import { IField } from 'interfaces'

const Field: FC<Partial<IField>> = ({
  width,
  id,
  label,
  type = 'text',
  placeholder,
  disabled = false,
  select,
  labelWidth = '30%',
  maxLength = 255,
  list,
  value,
}) => {
  const { handleChange } = useForm()

  return (
    <FormGroup className={id === 'zip' && 'absolute'} just={id === 'zip' && 'flex-end'} width={id === 'zip' ? '40%' : '100%'}>
      <Label
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
        <Input
          width={id === 'zip' ? '40%' : width}
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className='border border-blue-300 outline'
          onChange={handleChange}
        />
      )}
    </FormGroup>
  )
}

export default Field
