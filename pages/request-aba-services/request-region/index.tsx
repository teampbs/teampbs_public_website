import { FC } from 'react'

import Layout from 'components/Layout/Layout'
import MapSection from 'components/shared/MapSection/MapSection'

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

const RequestRegion: FC = () => (
  <Layout
    title='Request ABA Services | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <MapSection jobs_mode request_form />
  </Layout>
)

export default RequestRegion
