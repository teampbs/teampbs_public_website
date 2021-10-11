import { FC, useEffect } from 'react'
import Link from 'next/link'

import { mq } from 'styles/styles'
import { Title, LinkBox } from 'styles/styles'
import Button from 'components/shared/Button'
import { ITitleSection } from 'interfaces'
import { Disclaimer, styles } from 'components/Header/styles'
import { Interpolation, Theme } from '@emotion/react'
// import useWindowDimensions from 'hooks/useWindowsDimensions'

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
  marginTop: ['21.875rem', '21.875rem', '0', '0'],
})

const scrollOff = mq({
  marginTop: ['7.5rem', '17.5rem', '0', '0'],
})

// TODO display: flex fix
const textStyle = mq({ display: 'none', width: '50%', textAlign: 'left', paddingTop: '2.5rem' })

const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto', height: '100%' } as Interpolation<Theme>

const titleCss = mq({
  display: 'flex',
  fontSize: [25, 30, 35, 44]
})

const subtitleCss = mq({
  display: 'flex',
  fontSize: [16, 20, 24, 28],
  marginTop: ['2rem', '2rem', '', '']
})

const TitleSection: FC<ITitleSection> = ({
  title,
  subtitle,
  description,
  moreInfo,
  isScroll,
}) => {
  // const { width } = useWindowDimensions()

  useEffect(() => {
    console.log('+++desc+++', description);
    
  }, [])
  

  return (
    <>
      <section css={sectionStyle}>
        <Title css={moreInfo ? titleCss : HideOnSmall} size={44} height={74}>
          {title}
        </Title>
        {names.includes(title) && (
          <Title css={moreInfo ? subtitleCss : HideOnSmall} size={28} height={58}>
            {subtitle}
          </Title>
        )}
        <Disclaimer m='0 0 2rem 0' fs='17px' mw='700px' css={moreInfo ? { display: 'flex' } : HideOnSmall}>
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
}


TitleSection.defaultProps = {
  description: defaultText,
}

export default TitleSection
