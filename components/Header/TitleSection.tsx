import { FC } from 'react'
import Link from 'next/link'

import { mq } from 'styles/styles'
import { Title, LinkBox } from 'styles/styles'
import Button from 'components/shared/Button'
import { ITitleSection } from 'interfaces'
import { Disclaimer, styles } from 'components/Header/styles'
import { Interpolation, Theme } from '@emotion/react'

const defaultText = `
  Positive Behavior Supports Corporation embraces a specific approach to
  delivery of applied behavior analysis (ABA) therapy: Positive behavior
  support (PBS) which is a research-based approach to supporting people
  of all ages with behavioral challenges in home, school, and community
  settings.
`

const names = ['ABA Therapy', 'Join Our Team']

const HideOnSmall = mq({
  display: ['none', 'none', 'flex', 'flex'],
})

const scrollOn = mq({
  marginTop: ['350px', '350px', '0', '0'],
})

const scrollOff = mq({
  marginTop: ['280px', '280px', '0', '0'],
})

const textStyle = { width: '50%', textAlign: 'left', paddingTop: '2.5rem' }

const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto', height: '100%' } as Interpolation<Theme>

const TitleSection: FC<ITitleSection> = ({
  title,
  subtitle,
  description,
  moreInfo,
  isScroll,
}) => (
  <>
    <section css={sectionStyle}>
      <Title css={HideOnSmall} size={44} height={74}>
        {title}
      </Title>
      {names.includes(title) && (
        <Title css={HideOnSmall} size={28} height={58}>
          {subtitle}
        </Title>
      )}
      <Disclaimer m='0 0 2rem 0' fs='18px' mw='700px' css={HideOnSmall}>
        {description}
      </Disclaimer>
      {moreInfo && (
        <>
          <p css={[HideOnSmall, textStyle]}>
            INSTRUCTIONS: Answer each question accurately and completely. Print
            “n/a” in any space that does not apply to you. Incomplete
            applications or applications providing additional non-requested
            information are considered withdrawn and will not be considered.
          </p>
          <p css={[HideOnSmall, textStyle]}>
            In Washington we are hiring Behavior Analysts (BCBA’s and BCABA’s)
            as well as Registered Behavior Technicians and Behavior Assistants.
          </p>
        </>
      )}
      {title === 'ABA Therapy' && (
        <>
          <Link href='/aba-services'>
            <a css={HideOnSmall}>
              <Button icon width='300px' padding='0 55px 0 75px'>
                Explore our services
              </Button>
            </a>
          </Link>
          <LinkBox css={HideOnSmall}>
            <Link href='/job-application'>
              <a css={styles.headerLink}>
                Want to work with Team PBS? Get in touch
              </a>
            </Link>
          </LinkBox>
          <Disclaimer css={isScroll ? scrollOn : scrollOff}>
            Leaders in Applied Behavior Analysis
          </Disclaimer>
        </>
      )}
    </section>
  </>
)

TitleSection.defaultProps = {
  description: defaultText,
}

export default TitleSection
