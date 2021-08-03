import dynamic from 'next/dynamic'

import Layout from 'components/Layout/Layout'
import { colors } from 'utils/constants'

const text = {
  title: '',
  subtitle: '',
  description: ''
}

const metaDesc = {
  name: 'description',
  content:
    'Looking for a Board Certified Behavior Analyst in your area? Get in touch with your local Applied Behavior Analysis therapist and request therapy today.',
}

const MapSection = dynamic(() => import('components/shared/MapSection/MapSection'))

const Region = () => (
  <Layout
    black
    bg={colors.blueMild}
    meta={metaDesc}
    title='Contact Us | PBS Corporation'
    text={text}
    height='200px'
  >
    <MapSection isContact />
  </Layout>
)

export default Region
