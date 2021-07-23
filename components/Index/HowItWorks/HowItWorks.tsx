/** @jsxImportSource @emotion/react */

import { MediaCard } from 'components/Index/HowItWorks/MediaCard'
import {
  CardBox,
  SectionBox,
  Title,
  SectionBoxMq,
} from 'components/Index/styles'
import Button from 'components/shared/Button'
import { FC } from 'react'
import { colors } from 'utils/constants'

const darkStyle = {
  color: colors.white,
  fontSize: 35,
  marginTop: '8rem',
}

const HowItWorks: FC<{ dark?: boolean, list: any }> = ({ dark, list }) => (
  <SectionBox css={SectionBoxMq}>
    <Title css={dark && darkStyle}>
      {dark ? 'The approval process' : 'How it works'}
    </Title>
    <CardBox>
      {list.map((item, index) => (
        <MediaCard dark={dark} key={index} {...item} />
      ))}
    </CardBox>
    <Button height={dark && '70px'} width={dark ? '336px' : '265px'} icon>
      {dark ? 'Submit Service Request' : 'Explore our services'}
    </Button>
  </SectionBox>
)

export default HowItWorks
