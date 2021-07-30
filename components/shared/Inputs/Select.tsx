import React, { FC } from 'react'

import { SelectWrap, SelectField } from 'components/shared/styles'
import useForm from 'Hooks/useForm'

const Select: FC<{ id: string; list: string[], margin?: string | number, half?: boolean }> = ({ id, list, margin, half }) => {
  const { handleChange } = useForm()

  return (
    <SelectWrap margin={margin} half={half}>
      <SelectField name={id} className={half && 'px-2'} id={id} onChange={handleChange}>
        {React.Children.toArray(list.map((item: string) => (
          <option value={item}>{item}</option>
        )))}
      </SelectField>
    </SelectWrap>
  )
}

export default Select
