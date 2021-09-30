import React, { FC } from 'react'

import { SelectWrap, SelectField } from 'components/shared/styles'

const Select: FC<{ id: string; list: string[], margin?: string | number, half?: boolean }> = ({ id, list, margin, half }) => {

  return (
    <SelectWrap margin={margin} half={half}>
      <SelectField name={id} className={half && 'px-2'} id={id}>
        {React.Children.toArray(list.map((item: string) => (
          <option value={item}>{item}</option>
        )))}
      </SelectField>
    </SelectWrap>
  )
}

export default Select
