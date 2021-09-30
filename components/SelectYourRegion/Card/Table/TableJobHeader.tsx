import { style } from 'components/SelectYourRegion/styles'
import React from 'react'

const nonBusinessDays = ['saturday', 'sunday']

const TableJobHeader = ({ handleCheckbox }) => (
  <>
    <article css={style.table.article}>
      <label css={style.table.label} htmlFor='hours'>
        Enter the number of therapy hours you desire to work pre week:
      </label>
      <input css={style.table.input} id='hours' type='number' />
    </article>
    <article css={style.table.article}>
      <p css={style.table.text}>I am willing to work some weekend hours on:</p>
      {React.Children.toArray(
        nonBusinessDays.map((name) => (
          <>
            <input
              css={style.table.checkbox}
              id={`day_${name}`}
              name={name}
              type='checkbox'
              onClick={handleCheckbox(name)}
            />
            <label css={style.table.checkLabel} htmlFor={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
          </>
        ))
      )}
    </article>
  </>
)

export default TableJobHeader
