import ReactPlayer from 'react-player/lazy'
import { useRouter } from 'next/router'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import { IMeta } from 'interfaces'
import { colors } from 'utils/constants'
import { videos } from 'utils/mock/videos'
import { useEffect } from 'react'

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
  const router = useRouter()

  useEffect(() => {
    console.log('loaded videos: ', videos);
  }, [])

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
        {videos.map(({ title, date, url, id }) => (
          <Flexbox
            key={id}
            justify=''
            items='flex-start'
            col
            css={{
              minHeight: '400px',
              maxWidth: '33%',
              flex: '0 0 33%',
              padding: '0 1rem',
            }}
          >
            <ReactPlayer
              css={{ cursor: 'pointer' }}
              playing={false}
              onPlay={() => router.push(`/team-pbs-videos/${id}`)}
              width='400px'
              height='230px'
              controls
              url={url}
            />
            <h4 css={{ fontSize: 25, fontWeight: 700 }}>{title}</h4>
            <p css={{ color: colors.darkGray }}>{date}</p>
          </Flexbox>
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
