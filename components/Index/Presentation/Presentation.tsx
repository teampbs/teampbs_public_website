/** @jsxImportSource @emotion/react */
import ReactPlayer from 'react-player/lazy'

import Button from 'components/shared/Button'
import { Wrapper, WrapperMq, Header, HeaderMq, ShowOnSmall, HideOnSmall } from 'components/Index/styles'
import { mq } from 'styles/styles'

const Presentation = () => (
  <Wrapper css={WrapperMq}>
    <Header css={HeaderMq}>
      <h2 css={mq({
        fontSize: ['26px', '26px', '32px', '35px']
      })} className='font-bold'>Latest company videos</h2>
      <p className='text-base py-2'>
        Check the latest field videos and see how our representatives are
        helping improve quality of life for people with disabilities.
      </p>
      <div css={HideOnSmall}>
        <Button inverse width='210px' icon>
          See all videos
        </Button>
      </div>
    </Header>
    <ReactPlayer style={{ padding: '2rem', minWidth: '80%', minHeight: '400px'}} width='100%' height='100%' controls url='https://player.vimeo.com/video/508053918' />
    <div css={ShowOnSmall}>
      <Button inverse width='210px' icon>
        See all videos
      </Button>
    </div>
  </Wrapper>
)

export default Presentation
