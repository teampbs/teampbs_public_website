import { FC } from 'react'

import Input from 'components/shared/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { refInputs } from 'components/SelectYourRegion/mocks'

const References: FC = () => (
  <Flexbox col gap='0.5rem' items='flex-center'>
    {refInputs.map(i => <Input key={i.id} {...i} />)}
    <Wrapper>
      <Button>+ Add Reference</Button>
    </Wrapper>
  </Flexbox>
)

export default References
