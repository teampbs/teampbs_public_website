import { style } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import React from 'react'

const nonBusinessDays = ['saturday', 'sunday']

const TableJobHeader = ({ handleCheckbox }) => {
  const { width } = useWindowDimensions()

  return (
    <>
      <article css={[style.table.article, width < 900 && { flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2rem' }]}>
        <label css={[style.table.label, width < 900 && { width: '100%' }]} htmlFor='hours'>
          Enter the number of therapy hours you desire to work pre week:
        </label>
        <input css={[style.table.input, width < 900 && { width: '100%' }]} id='hours' type='number' />
      </article>
      <article css={[style.table.article, width < 900 && { flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }]}>
        <p css={style.table.text}>I am willing to work some weekend hours on:</p>
        {React.Children.toArray(
          nonBusinessDays.map((name) => (
            <div css={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
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
            </div>
          ))
        )}
      </article>
    </>
  )
}


export default TableJobHeader
