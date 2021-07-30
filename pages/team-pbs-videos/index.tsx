import ReactPlayer from 'react-player/lazy'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import { IMeta } from 'interfaces'
import { colors } from 'utils/constants'

const text = {
  title: 'Join Our Team',
  description: 'Check our field and promotional videos',
}

const metaDesc: IMeta = {
  name: 'description',
  content:
    'Want to find out more about our team and our services? Watch our videos and learn how our team of ABA therapists can help you and your loved ones!',
}

const videos = [
  { title: 'Circle Time with Cassie and Team PBS 20', date: '20:08 · 06/05/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Behavior Technicians with PBS Corp.', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Professional Development at PBS', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Behavior Technicians with PBS Corp.', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Professional Development at PBS', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Behavior Technicians with PBS Corp.', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Circle Time with Cassie and Team PBS 20', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
  { title: 'Behavior Technicians with PBS Corp.', date: '2:35·06/28/2020', url: 'https://player.vimeo.com/video/508053918' },
]

const PBSVideos = () => (
  <Layout
    meta={metaDesc}
    video
    title='Our Videos | PBS Corporation'
    text={text}
    bg={colors.blueMild}
    black
  >
    <Flexbox
      background={colors.blueMild}
      padding='0 15%'
      items='center'
      css={{ flexWrap: 'wrap' }}
    >
      {videos.map(({ title, date, url }) => (
        <Flexbox justify='' items='flex-start' col css={{ minHeight: '400px', maxWidth: '33%', flex: '0 0 33%', padding: '0 1rem' }}>
          <ReactPlayer
            width='400px'
            height='230px'
            controls
            url={url}
          />
          <a css={{ fontSize: 25, fontWeight: 700 }}>{title}</a>
          <p css={{ color: colors.darkGray }}>{date}</p>
        </Flexbox>
      ))}
    </Flexbox>
  </Layout>
)

export default PBSVideos
