import Layout from 'components/Layout/Layout'
import MapSection from 'components/shared/MapSection/MapSection'

const image = {
  src:'/images/pages/selectYourRegion/banner.png',
  alt:'eligibility banner',
}

const text = {
  title: 'Join Our Team',
  description: 'Select your region from list or map.',
}

const metaDesc = {
  name: 'description',
  content: 'Want to become a part of our team? PBS Corporation keeps its door open to all ABA certified behavior analysts. Share your skills and help those in need!'
}

const JobApplication = () => (
  <Layout title='Join Our Team | PBS Corporation' meta={metaDesc} image={image} text={text} height='500px'>
    <MapSection jobs_mode />
  </Layout>
)

export default JobApplication