import Layout from 'components/Layout/Layout'
import { image, text } from 'components/Careers/careers.mock'
import { JobsSection } from 'components/Careers/JobsSection'
import ServiceSection from 'components/shared/ServiceSection'

const metaDesc = {
  name: 'description',
  content:
    'Looking for ABA therapy jobs? We are searching for the best, who are looking to make lasting change in families lives. View our open autism jobs positions!',
}

const Careers = () => (
  <Layout title='ABA Therapy Jobs | PBS Corporation' meta={metaDesc} image={image} text={text} height='500px'>
    <JobsSection />
    <ServiceSection />
  </Layout>
)

export default Careers
