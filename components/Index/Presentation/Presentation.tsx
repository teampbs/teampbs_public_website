import Link from 'next/link'

import Button from 'components/shared/Button'
import {
  style
} from 'components/Index/styles'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const Presentation = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve()
  })

  return (
    <div css={style.presentation.wrapper} ref={observe}>
      <header css={style.presentation.header}>
        <h2
          css={style.presentation.title}
        >
          Latest company videos
        </h2>
        <p css={style.presentation.text}>
          Check the latest field videos and see how our representatives are
          helping improve quality of life for people with disabilities.
        </p>
        <div css={style.presentation.inverseBtnWrap}>
          <Button inverse width='210px' icon>
            <Link href='/team-pbs-videos'>
              <a>See all videos</a>
            </Link>
          </Button>
        </div>
      </header>
      {inView  && <ReactPlayer
        style={style.presentation.video}
        width='100%'
        height='100%'
        controls
        url='https://player.vimeo.com/video/508053918'
      />}
      <div css={style.presentation.btnWrap}>
        <Button inverse width='210px' icon>
          See all videos
        </Button>
      </div>
    </div>
  )
}


export default Presentation
