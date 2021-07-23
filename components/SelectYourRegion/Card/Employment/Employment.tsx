import { FC } from 'react'

import Checkbox from 'components/shared/Checkbox'
import Input from 'components/shared/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'

const Employment: FC = () => (
  <Flexbox items='' col gap='0.5rem'>
    <Input label='Company' id='company' />
    <Input label='Phone' id='phone' half placeholder='(XXX)XXX-XXX' />
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

export default Employment
