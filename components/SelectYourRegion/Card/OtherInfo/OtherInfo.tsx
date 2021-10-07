import { FC } from 'react'

import Input from 'components/shared/Inputs/Input'
import Checkbox from 'components/shared/Inputs/Checkbox'
import Flexbox from 'components/shared/Flexbox'
import { Empty } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const mobile = {
  '& #emp_phone, input': { width: '100%' },
  '& input[type="checkbox"]': { width: '1.5rem' },
  '&  div': {
    margin: '0',
    alignSelf: 'flex-start',
  },
  '&  button': {
    width: '100%',
  },
}

const LawInfo: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className='flex flex-col gap-2'>
      <Flexbox>
        {width > 900 && <Empty />}
        <Flexbox css={width < 900 && mobile} col gap='2.5rem'>
          <Checkbox
            id='age'
            label='I am 18 years of age or older'
          />
          <Checkbox
            id='full_time'
            label=' am available for full time employment'
          />
          <Input
            id='hours'
            label='How many hours do you want to work?'
            nowrap
            ml
          />
          <Checkbox
            id='apply'
            label='I applied with PBS before'
          />
          <Checkbox
            id='employed'
            label='I have been been previously employed (not contracted) by PBS'
          />
          <Flexbox col gap='30px' margin='30px 0'>
            <Input
              ml
              column
              id='positions'
              label='Give names and positions of any relatives, including in-laws, who work for PBS:'
            />
            <Input
              ml
              column
              id='skills'
              label='List any job related licenses/certifications, skills or qualifications including computer skills that support your application:'
            />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </div>
  )
}


export default LawInfo
