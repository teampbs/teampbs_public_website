import dynamic from 'next/dynamic'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import { IMeta } from 'interfaces'
import { colors } from 'utils/constants'
import { videos } from 'utils/mock/videos'

const VideoPlayer = dynamic(() => import('components/shared/TeamPbsVideos/VideoPlayer'))

const text = {
  title: 'Join Our Team',
  description: 'Check our field and promotional videos',
}

const metaDesc: IMeta = {
  name: 'description',
  content:
    'Want to find out more about our team and our services? Watch our videos and learn how our team of ABA therapists can help you and your loved ones!',
}

const PBSVideos = () => {

  return (
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
        {videos.map(video => (
          <VideoPlayer {...video} />
        ))}
      </Flexbox>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/videos')
//   const videos = await res.json()

//   if (!videos) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { videos },
//   }
// }

export default PBSVideos
