

import Card from 'components/Index/AboutSection/Card'
import { mq } from 'styles/styles'
import { Article, AnchorLink, ArticleMq, Container, ContainerMq } from 'components/Index/styles'

const AboutSection = () => (
  <Container css={ContainerMq}>
    <Article css={ArticleMq}>
      <p
        css={mq({
          fontSize: ['14px', '14px', '16px', '16px'],
        })}
      >
        PBS Corp. is an agency committed to the principles of Positive Behavior
        Support (an approach based on principles of applied behavior analysis,
        ABA) to improve not only behavior, but also quality of life for the
        individuals we serve, their families, and others who support them.
      </p>
      <p>
        We provide individualized ABA Therapy for those with autism and related
        disabilities, children and adults, to assist with decreasing challenging
        behaviors and increasing appropriate behaviors and skill deficits. Our
        programs are designed to empower caregivers and others involved in the
        individuals’ lives to support them within their natural routines so they
        can be successful and self-sufficient.
      </p>
      <AnchorLink href='#'>Learn more about PBS</AnchorLink>
    </Article>
    <Article css={ArticleMq}>
      <Card
        src='/images/community.png'
        alt='community'
        text='Providing ABA Therapy in home, school, and community settings'
      />
      <Card
        src='/images/support.png'
        alt='support'
        text='Supporting families Regionally across the United States and Canada'
      />
      <Card
        src='/images/health_care.png'
        alt='health_care'
        text='Accepting a variety of funding sources including a major health care providers'
      />
    </Article>
  </Container>
)

export default AboutSection
