/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import { useState } from 'react'

import Layout from 'components/Layout/Layout'
import ServiceSection from 'components/shared/ServiceSection'
import InfoBox from 'components/AbaServices/InfoBox'
import Flexbox from 'components/shared/Flexbox'
import Process from 'components/AbaServices/Process'
import { mq } from 'styles/styles'

const image = {
  src: '/images/pages/AbaServices/banner.png',
  alt: 'service banner',
}

const text = {
  title: 'ABA Services',
  description:
    'PBS Corp. provides a variety of applied behavior analysis services through highly-qualified behavior analysts to meet the unique needs of individuals, families and systems. These services include training and consultation, services within schools and agencies and intensive behavior intervention.',
}

const metaDesc = {
  name: 'description',
  content:
    'How we can help? ABA Corporation offers ABA services intended for individuals who need help with bettering language skills behavior problems. Learn more!',
}

const FlexReverse = mq({
  flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
  gap: ['2rem', '2rem', '2rem', 0],
})

const AbaServices = () => {
  const [expand, setExpand] = useState(false)

  const toggleExpand = () => setExpand((prev) => !prev)

  return (
    <Layout
      title='ABA Services | PBS Corporation'
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <section
        css={mq({ width: ['95%', '95%', '95%', '66%'] })}
        className='flex flex-col items-center py-20'
      >
        <p className='text-xl py-10 pb-20'>
          Creating meaningful and socially significant improvements in quality
          of life for those we serve.
        </p>
        <Flexbox col>
          <Flexbox
            css={FlexReverse}
            justify='space-between'
          >
            <InfoBox
              isOpen={expand}
              toggle={toggleExpand}
              expand
              title='Comprehensive Behavior Intervention'
            >
              For individuals who experience significant behavior challenges
              and/or present with skill deficits that are impeding their quality
              of life, we provide individualized comprehensive behavior
              intervention programming.
            </InfoBox>
            <Image
              height='600'
              width='635'
              src='/images/pages/AbaServices/img1.png'
            />
          </Flexbox>
          <Process expand={!expand} />
          <Flexbox
            css={mq({ flexDirection: ['column', 'column', 'column', 'row'] })}
          >
            <Image
              height='600'
              width='635'
              src='/images/pages/AbaServices/img2.png'
            />
            <InfoBox small title='ABA in Schools'>
              Applied behavior analysis is a beneficial component to the school
              setting. By empowering teachers and staff with behavior
              modification techniques, students and staff can achieve positive
              interactions in learning environments. Positive Behavioral
              Interventions and Supports (PBIS) has already become a standard in
              public education systems and has been effective in decreasing
              problematic behaviors and increasing positive behaviors of
              students through providing emphasis on appropriate school-related
              behaviors. Our team can also help school teams identify
              appropriate learning targets for staff and students and implement
              professional development training to improve progress monitoring
              systems and build curriculum.
              <strong>
                Range of Service Options: Individual Student Needs (functional
                behavior assessment and behavior intervention plan), Classroom
                Management, Training and Professional Development, Social Skills
                Groups, and more.
              </strong>
            </InfoBox>
          </Flexbox>
          <Flexbox css={FlexReverse}>
            <InfoBox title='Training and Consultation'>
              PBS Corp. is available to provide customizable training to meet
              the needs of any target audience. We work collaboratively to
              provide systems-wide behavior supports to promote inclusion
              opportunities. PBS Corp. team members will utilize effective
              teaching practices based on the principles of applied behavior
              analysis.
            </InfoBox>
            <Image
              height='600'
              width='635'
              src='/images/pages/AbaServices/img3.png'
            />
          </Flexbox>
        </Flexbox>
      </section>
      <ServiceSection />
    </Layout>
  )
}

export default AbaServices
