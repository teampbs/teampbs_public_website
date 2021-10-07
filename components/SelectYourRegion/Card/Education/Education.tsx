import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import Checkbox from 'components/shared/Inputs/Checkbox'
import Input from 'components/shared/Inputs/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const container = { display: 'flex', flexDirection: 'column', gap: '.5rem' } as Interpolation<Theme>

const Education: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div css={[container, width < 900 && {
      '& input': {
        width: '100%',
        margin: '0',
      },
      '& input[type="checkbox"]': {
        width: '1.5rem',
        margin: '1rem 0',
      },
      '& > div': {
        margin: '0',
      },
      '&  button': {
        width: '100%'
      }
    }]}>
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
}


export default Education
