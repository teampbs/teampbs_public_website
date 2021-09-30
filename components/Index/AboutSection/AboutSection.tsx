import Link from 'next/link'

import Card from 'components/Index/AboutSection/Card'
import { style } from 'components/Index/styles'

const cards = [
  {
    src: '/images/community.png',
    alt: 'community',
    text: 'Providing ABA Therapy in home, school, and community settings',
  },
  {
    src: '/images/support.png',
    alt: 'support',
    text: 'Supporting families Regionally across the United States and Canada',
  },
  {
    src: '/images/health_care.png',
    alt: 'health_care',
    text: 'Accepting a variety of funding sources including a major health care providers',
  },
]

const AboutSection = () => (
  <section css={style.about.container}>
    <article css={style.about.article}>
      <p css={style.about.text}>
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
      <Link href='/about-team-pbs'>
        <a css={style.about.link}>Learn more about PBS</a>
      </Link>
    </article>
    <article css={style.about.article}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </article>
  </section>
)

export default AboutSection
