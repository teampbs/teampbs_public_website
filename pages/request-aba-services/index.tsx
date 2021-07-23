/** @jsxImportSource @emotion/react */

import HowItWorks from 'components/Index/HowItWorks/HowItWorks'
import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'

const image = {
  src: '/images/pages/RequestAbaServices/req_services_banner.png',
  alt: 'eligibility banner',
}

const text = {
  title: 'Request ABA Services',
  description:
    'Offering ABA services in 16 states and Canada across over 250 private insurance companies and state-funded policies.',
}

const metaDesc = {
  name: 'description',
  content:
    'Need our help? Select your region and get in touch with an ABA provider near you. Take advantage of an interactive map on our website!',
}

// const style = {
//   processTitle: {
//     color: colors.white,
//     fontSize: 35,
//     marginTop: '8rem',
//   },
// }

const cards = [
  {
    src: '/images/how_works_icon1_hp.png',
    alt: 'request',
    number: 1,
    title: 'Submit Service Request',
    text: 'We need to collect basic demographic information for the parent/caregiver and individual who will receive the service',
  },
  {
    src: '/images/how_works_icon2_hp.png',
    alt: 'connect',
    number: 2,
    title: 'Get contacted by PBS reps',
    text: 'Our team will respond within two business days of being contacted to provide a status update.',
  },
  {
    src: '/images/how_works_icon3_hp.png',
    alt: 'authorization',
    number: 3,
    title: 'Authorization process begins',
    text: 'Our clinical team will then work to evaluate the referral and obtain an authorization for services based on the individual’s current benefits.',
  },
  {
    src: '/images/how_works_icon4_hp.png',
    alt: 'visit',
    number: 4,
    title: 'Your first visit with Team PBS begin',
    text: 'Our clinical team will then work to evaluate the referral and obtain an authorization for services based on the individual’s current benefits.',
  },
]

const RequestAbaServices = () => (
  <Layout
    title='Request ABA Services | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <Flexbox col background={colors.blueMild} height='1444px'></Flexbox>
    <Flexbox
      col
      background={colors.darkBlue}
      height='900px'
      justify='flex-start'
    >
      <Flexbox padding='0 3rem 3rem' gap='.5rem' items='flex-start'>
        <HowItWorks list={cards} dark />
      </Flexbox>
    </Flexbox>
  </Layout>
)

export default RequestAbaServices
