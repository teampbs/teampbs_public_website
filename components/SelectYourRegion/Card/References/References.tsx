import { FC } from 'react'

import Input from 'components/shared/Inputs/Input'
import { Button, Wrapper } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { refInputs } from 'components/SelectYourRegion/mocks'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const References: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <Flexbox
      css={
        width < 900 && {
          '& #ref_phone': { width: '100%' },
          '& > div': {
            margin: '0',
          },
          '&  button': {
            width: '100%',
          },
        }
      }
      col
      gap='0.5rem'
      items='flex-center'
    >
      {refInputs.map((i) => (
        <Input key={i.id} {...i} />
      ))}
      <Wrapper>
        <Button>+ Add Reference</Button>
      </Wrapper>
    </Flexbox>
  )
}

export default References
