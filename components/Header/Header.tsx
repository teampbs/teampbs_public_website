/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import Image from 'next/image'

import StickyNav from 'components/Header/StickyNav/StickyNav'
import TitleSection from 'components/Header/TitleSection'
import TopNav from 'components/Header/TopNav'
import { IHeader } from 'interfaces'
import { Box, Heading, HeadingImgMq, HeadingMq, Video, VideoMq } from 'components/Header/styles'

const Header: FC<IHeader> = ({
  video,
  image,
  text,
  height = '90vh',
  scrolling,
  black,
  moreInfo,
  bg = 'rgba(0,0,0,0.45)',
}) => (
  <Heading
    css={video ? HeadingMq : HeadingImgMq}
    bg={bg}
    black={black}
    height={height}
  >
    {video ? (
      <Video
        css={VideoMq}
        src='images/video/friday.mp4'
        autoPlay
        muted
        loop
      />
    ) : (
      <Box css={HeadingImgMq}>
        {image && (
          <Image
            src={image?.src}
            layout='fill'
            objectFit='fill'
            alt={image?.alt}
          />
        )}
      </Box>
    )}
    <TopNav />
    <StickyNav scrolling={scrolling} />
    <TitleSection
      moreInfo={moreInfo}
      title={text?.title}
      subtitle={text?.subtitle}
      description={text?.description}
      isScroll={scrolling}
    />
  </Heading>
)

export default Header
