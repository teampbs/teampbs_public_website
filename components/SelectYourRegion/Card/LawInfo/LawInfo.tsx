import { FC } from 'react'
import { Interpolation } from '@emotion/styled'
import { Theme } from '@emotion/react'

import Select from 'components/shared/Inputs/Select'
import Textarea from 'components/shared/Textarea'
import Checkbox from 'components/shared/Inputs/Checkbox'
import { colors } from 'utils/constants'
import { degrees } from 'components/SelectYourRegion/mocks'

const legend = {
  color: colors.textGray,
  width: '40%',
  whiteSpace: 'nowrap',
  textAlign: 'right',
} as Interpolation<Theme>

const flex = {
  display: 'flex',
  width: '100%',
}

const box = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '100%'
} as Interpolation<Theme>

const wrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
} as Interpolation<Theme>

const LawInfo: FC = () => (
  <div css={wrap}>
    <div css={flex}>
      <div css={legend}>Languages Spoken</div>
      <div css={box}>
        <div className='mb-10'>
          <Checkbox bg id='en' label='English' />
          <Checkbox id='es' label='Spanish' />
        </div>
        <div className='mb-10'>
          <Checkbox id='felony' label='I have been convicted of a felony' />
        </div>
        <Textarea
          height='200px'
          id='description'
          label='Please type a brief description of your experience specifically in the field of Behavior Analysis or working with disabilities.'
        />
        <Textarea
          height='45px'
          id='hear'
          label='How did you hear about Team PBS?'
        />
      </div>
    </div>
    <div css={flex}>
      <div css={legend}>Highest Degree</div>
      <div css={box}>
        <Select id='degrees' list={degrees} />
        <Checkbox
          id='coursework'
          label='Are you currently enrolled in Behavior Analysis coursework?'
        />
        <Checkbox id='npi_number' label='I have a NPI number' />
      </div>
    </div>
  </div>
)

export default LawInfo
