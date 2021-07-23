import Layout from 'components/Layout/Layout'
import { IMeta } from 'interfaces'

const text = {
  title: 'Join Our Team',
  description: 'Check our field and promotional videos',
}

const metaDesc: IMeta = {
  name: 'description',
  content:
    'Want to find out more about our team and our services? Watch our videos and learn how our team of ABA therapists can help you and your loved ones!',
}

const PBSVideos = () => <Layout meta={metaDesc} title='Our Videos | PBS Corporation' text={text} height='500px' />

export default PBSVideos
