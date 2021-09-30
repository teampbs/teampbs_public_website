import { Article, Button } from 'components/SelectYourRegion/styles'
import { colors } from 'utils/constants'

const TableRequestHeader = ({ handleButton }) => (
  <Article className='flex justify-between items-center gap-4 p-2'>
    <p css={{ color: colors.darkGray }} className='text-sm'>
      Click to select date & time. Click & drag to select multiple dates &
      times. Click day to select all times available.
    </p>
    <div className='flex gap-2'>
      <Button onClick={() => handleButton(true)} gray >Check all</Button>
      <Button onClick={() => handleButton(false)} gray >Clear</Button>
    </div>
  </Article>
)

export default TableRequestHeader