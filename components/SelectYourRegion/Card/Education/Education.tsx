import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import Checkbox from 'components/shared/Inputs/Checkbox'
import Input from 'components/shared/Inputs/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'

const container = { display: 'flex', flexDirection: 'column', gap: '.5rem' } as Interpolation<Theme>

const Education: FC = () => (
  <div css={container}>
    <Input label='School' id='edu_school' />
    <Input label='City' id='edu_city' half />
    <Input label='State' id='edu_state' half />
    <Input label='From' id='edu_from' half second />
    <Input label='To' id='edu_to' half second />
    <Checkbox ml={195} id='edu_graduated' label='I graduated' />
    <Input label='Degree' id='edu_degree' />
    <Wrapper>
      <Button>+ Add School</Button>
    </Wrapper>
  </div>
)

export default Education
