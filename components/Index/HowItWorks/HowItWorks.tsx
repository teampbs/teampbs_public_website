import { MediaCard } from 'components/Index/HowItWorks/MediaCard'
import {
  CardBox,
  SectionBox,
  Title,
  SectionBoxMq,
} from 'components/Index/styles'
import Button from 'components/shared/Button'
import Link from 'next/link'
import { FC } from 'react'
import { colors } from 'utils/constants'

const darkStyle = {
  color: colors.white,
  fontSize: 35,
  marginTop: '8rem',
}

const HowItWorks: FC<{ dark?: boolean; list: any }> = ({ dark, list }) => (
  <SectionBox css={SectionBoxMq}>
    <Title css={dark && darkStyle}>
      {dark ? 'The approval process' : 'How it works'}
    </Title>
    <CardBox>
      {list.map((item, index) => (
        <MediaCard dark={dark} key={index} {...item} />
      ))}
    </CardBox>
    {dark ? (
      <Link href='/request-aba-services/request-region'>
        <a>
          <Button height='70px' width='336px' icon>
            <p css={{ fontSize: 18, margin: 'auto' }}>
              Submit Service Request
            </p>
          </Button>
        </a>
      </Link>
    ) : (
      <Button width='265px' icon>
        Request ABA Therapy
      </Button>
    )}
  </SectionBox>
)

export default HowItWorks
