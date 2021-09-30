
import { FC } from 'react'
import Image from 'next/image'

import StickyNav from 'components/Header/StickyNav/StickyNav'
import TitleSection from 'components/Header/TitleSection'
import TopNav from 'components/Header/TopNav'
import { IHeader } from 'interfaces'
import { Box, Heading, HeadingImgMq, HeadingMq, styles } from 'components/Header/styles'

const Header: FC<IHeader> = ({
  video,
  image,
  text,
  height,
  scrolling,
  black,
  moreInfo,
  bg,
}) => (
  <Heading
    css={video ? HeadingMq : HeadingImgMq}
    bg={bg}
    black={black}
    height={height}
  >
    {video ? (
      <video
        css={styles.video}
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
    <StickyNav scrolling={scrolling} black={black} />
    <TitleSection
      moreInfo={moreInfo}
      title={text?.title}
      subtitle={text?.subtitle}
      description={text?.description}
      isScroll={scrolling}
    />
  </Heading>
)

Header.defaultProps = {
  height: '90vh',
  bg: 'rgba(0,0,0,0.45)',
}

export default Header
