import { FC } from 'react'

import Checkbox from 'components/shared/Inputs/Checkbox'
import Input from 'components/shared/Inputs/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const mobile = {
  '& #emp_phone, input': { width: '100%' },
  '& input[type="checkbox"]': { width: '1.5rem' },
  '& > div': {
    margin: '0',
  },
  '&  button': {
    width: '100%',
  },
}

const Employment: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <Flexbox css={width < 900 && mobile} items='' col gap='0.5rem'>
      <Input label='Company' id='company' />
      <Input label='Phone' id='emp_phone' half placeholder='(XXX)XXX-XXX' />
      <Input label='Address' id='address' />
      <Input label='Supervisor' id='supervisor' />
      <Input label='Job Title' id='job' />
      <Input label='Responsibilities' id='responsibilities' />
      <Input label='From' id='from' half second />
      <Input label='To' id='to' half second />
      <Input label='Reason for Leaving' id='reason' />
      <Checkbox
        ml={195}
        id='reference'
        label='If needed, contact my previous supervisor for a reference'
      />
      <Wrapper>
        <Button>+ Add Employment</Button>
      </Wrapper>
    </Flexbox>
  )
}

export default Employment
