import Link from 'next/link'
import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import { MediaCard } from 'components/Index/HowItWorks/MediaCard'
import { style } from 'components/Index/styles'
import Button from 'components/shared/Button'

const HowItWorks: FC<{ dark?: boolean; list: any }> = ({ dark, list }) => (
  <div css={style.works.section}>
    <h1 css={[style.works.title, dark && style.works.darkTitle]}>
      {dark ? 'The approval process' : 'How it works'}
    </h1>
    <div css={style.works.cardBox as Interpolation<Theme>}>
      {list.map((item, index) => (
        <MediaCard dark={dark} key={index} {...item} />
      ))}
    </div>
    {dark ? (
      <Link href='/request-aba-services/request-region'>
        <a>
          <Button height='70px' width='336px' icon>
            <p css={style.works.submit}>Submit Service Request</p>
          </Button>
        </a>
      </Link>
    ) : (
      <Button width='265px' icon>
        Request ABA Therapy
      </Button>
    )}
  </div>
)

export default HowItWorks
