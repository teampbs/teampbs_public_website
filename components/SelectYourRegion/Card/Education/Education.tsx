import { FC } from 'react'

import Checkbox from 'components/shared/Inputs/Checkbox'
import Input from 'components/shared/Inputs/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'

const Education: FC = () => (
  <div className='flex flex-col gap-2'>
    <Input label='School' id='school' />
    <Input label='City' id='city' half />
    <Input label='State' id='state' half />
    <Input label='From' id='from' half second />
    <Input label='To' id='to' half second />
    <Checkbox ml={195} id='graduated' label='I graduated' />
    <Input label='Degree' id='degree' />
    <Wrapper>
      <Button>+ Add School</Button>
    </Wrapper>
  </div>
)

export default Education
