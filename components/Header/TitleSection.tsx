
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { mq } from 'styles/styles'
import { Title, TextLink, LinkBox } from 'styles/styles'
import Button from 'components/shared/Button'
import { ITitleSection } from 'interfaces'
import { Disclaimer } from 'components/Header/styles'

const defaultText = `
  Positive Behavior Supports Corporation embraces a specific approach to
  delivery of applied behavior analysis (ABA) therapy: Positive behavior
  support (PBS) which is a research-based approach to supporting people
  of all ages with behavioral challenges in home, school, and community
  settings.
`

const HideOnSmall = mq({
  display: ['none', 'none', 'flex', 'flex'],
})

const TitleSection: FC<ITitleSection> = ({
  title,
  subtitle,
  description = defaultText,
  moreInfo,
  isScroll,
}) => (
  <>
    <section className='flex flex-col items-center justify-center text-center m-auto h-full'>
      <Title
        css={HideOnSmall}
        size={44}
        height={74}
      >
        {title}
      </Title>
      {['ABA Therapy', 'Join Our Team'].includes(title) && (
        <Title
          css={HideOnSmall}
          size={28}
          height={58}
        >
          {subtitle}
        </Title>
      )}
      <Disclaimer
        m='0 0 2rem 0'
        fs='18px'
        mw='700px'
        css={HideOnSmall}
      >
        {description}
      </Disclaimer>
      {moreInfo && (
        <>
          <p
            css={HideOnSmall}
            className='w-2/4 text-left pt-10'
          >
            INSTRUCTIONS: Answer each question accurately and completely. Print
            “n/a” in any space that does not apply to you. Incomplete
            applications or applications providing additional non-requested
            information are considered withdrawn and will not be considered.
          </p>
          <p
            css={HideOnSmall}
            className='w-2/4 text-left pt-10'
          >
            In Washington we are hiring Behavior Analysts (BCBA’s and BCABA’s)
            as well as Registered Behavior Technicians and Behavior Assistants.
          </p>
        </>
      )}
      {title === 'ABA Therapy' && (
        <>
          <Link href='/aba-services'>
            <a
              css={HideOnSmall}
            >
              <Button icon width='300px' padding='0 55px 0 75px'>
                Explore our services
              </Button>
            </a>
          </Link>
          <LinkBox
            css={HideOnSmall}
          >
            <Link href='/job-application'>
              <TextLink>Want to work with Team PBS? Get in touch</TextLink>
            </Link>
            <Image src='/images/arrow-right.png' width='5' height='10' />
          </LinkBox>
          <Disclaimer
            css={mq(isScroll ? {
              marginTop: ['350px', '350px', '0', '0'],
            } : {
              marginTop: ['280px', '280px', '0', '0'],
            })}
          >
            Leaders in Applied Behavior Analysis
          </Disclaimer>
        </>
      )}
    </section>
  </>
)

export default TitleSection
