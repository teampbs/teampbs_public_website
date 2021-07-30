import Layout from 'components/Layout/Layout'
import ServiceSection from 'components/shared/ServiceSection'
import Expand from 'components/PbsTechnology/Expand'
import { expandCards } from 'components/PbsTechnology/expand_cards'
import { colors } from 'utils/constants'
import { mq, Text } from 'styles/styles'
import Card_one from 'components/PbsTechnology/Cards/Card_one'
import Card_two from 'components/PbsTechnology/Cards/Card_two'
import Card_three from 'components/PbsTechnology/Cards/Card_three'
import Card_four from 'components/PbsTechnology/Cards/Card_four'
import Card_five from 'components/PbsTechnology/Cards/Card_five'
import Card_six from 'components/PbsTechnology/Cards/Card_six'
import Flexbox from 'components/shared/Flexbox'

const image = {
  src: '/images/pages/PbsTechnology/banner.png',
  alt: 'pbs technology banner',
}

const text = {
  title: 'What is Applied Behavior Analysis?',
  description: 'Improving lives through lasting changes',
}

const metaDesc = {
  name: 'description',
  content:
    'Positive behavior support is an individualized process that incorporates the principles of applied behavior analysis and person and family-centered practices.',
}

const PbsTechnology = () => (
  <Layout
    title='What is Applied Behavior Analysis? | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <Flexbox css={mq({ width: ['', '', '', ''], lineHeight: '2rem', textAlign: 'center', padding: '12rem 1rem', background: colors.blueMild })} col >
      <Text size='1.25rem' width='50%' padding='0 0 2.5rem 0'>
        Positive behavior support is an individualized, research-based process
        that incorporates the principles of applied behavior analysis and person
        and family-centered practices.
      </Text>
      <Text size='1.125rem' width='50%'>
        The overarching goal is to produce lasting changes in the quality of
        life of the people we serve. It involves conducting comprehensive
        assessments to develop interventions in collaboration with family
        members, educators, direct services providers, and others caring for the
        individual. The primary characteristics of positive behavior support are
        summarized below.
      </Text>
      <h3 className='text-4xl font-bold mt-32'>PBS Components</h3>
      <Text margin='1.25rem 0 0 0' color={colors.textGray}>
        Learn why this approach is so successful.
      </Text>
      {expandCards.map(({ title, id }) => (
        <Expand title={title}>
          {id === 1 && <Card_one />}
          {id === 2 && <Card_two />}
          {id === 3 && <Card_three />}
          {id === 4 && <Card_four />}
          {id === 5 && <Card_five />}
          {id === 6 && <Card_six />}
        </Expand>
      ))}
    </Flexbox>
    <ServiceSection />
  </Layout>
)

export default PbsTechnology
