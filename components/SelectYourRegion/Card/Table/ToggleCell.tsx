import { useEffect, useState } from 'react'

import { style } from 'components/SelectYourRegion/styles'

const ToggleCell = ({ day, isDayMarked, isMarkAll }) => {
  const [isMarked, setIsMarked] = useState(false)

  useEffect(() => {
    isDayMarked ? setIsMarked(true) : setIsMarked(false)
  }, [isDayMarked])

  useEffect(() => isMarkAll ? setIsMarked(true) : setIsMarked(false), [isMarkAll])

  const handleToggle = () => setIsMarked(prev => !prev)

  return (
    <td id={day} onClick={handleToggle} css={[style.table.cell, isMarked && style.marked]} />
  )
}

ToggleCell.defaultProps = {
  isDayMarked: false,
  isMarkAll: false,
}

export default ToggleCell
