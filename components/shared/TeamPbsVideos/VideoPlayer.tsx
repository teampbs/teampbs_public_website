import ReactPlayer from 'react-player/lazy'
import { useRouter } from 'next/router'

import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'

const VideoPlayer = ({ title, id, date, url }) => {
  const router = useRouter()

  return (
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
  )
}

export default VideoPlayer
