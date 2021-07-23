import Layout from 'components/Layout/Layout'
import ServiceSection from 'components/shared/ServiceSection'
import Expand from 'components/PbsTechnology/Expand'
import { expandCards } from 'components/PbsTechnology/expand_cards'
import { colors } from 'utils/constants'
import { Text } from 'styles/styles'

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
    <div className='flex flex-col items-center bg-blue-50 leading-8 text-center py-48'>
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
      {expandCards.map(({ title, children }) => (
        <Expand title={title}>{children}</Expand>
      ))}
    </div>
    <ServiceSection />
  </Layout>
)

export default PbsTechnology
