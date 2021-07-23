import MapSection from 'components/shared/MapSection/MapSection'
import Layout from 'components/Layout/Layout'

const text = {
  title: 'Contact PBS Corporation',
  subtitle: 'Learn more about PBS and ABA',
  description: 'We have large number of behavior analysts including doctoral level (BCBA-D), master\'s level (BCBA) and bachelor\'s level (BCaBA). On a limited basis, in some areas, we also offer licensed mental health counselors, speech and language and occupational therapist services.'
}

const metaDesc = {
  name: 'description',
  content:
    'Looking for a Board Certified Behavior Analyst in your area? Get in touch with your local Applied Behavior Analysis therapist and request therapy today.',
}

const Region = () => (
  <Layout
    black
    meta={metaDesc}
    title='Contact Us | PBS Corporation'
    text={text}
    height='500px'
  >
    <MapSection />
  </Layout>
)

export default Region
