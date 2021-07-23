/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import Image from 'next/image'

import { Frame } from 'components/Header/styles'
import { ILogo } from 'interfaces'
import { mq } from 'styles/styles'

const logoStyle = {
  margin: [
    '0 auto 1rem auto',
    '0 auto 1rem auto',
    '0 auto 1rem auto',
    '0 auto 0 0',
  ],
  width: ['auto', 'auto', 'auto'],
}

const logoStyleFix = {
  margin: ['0 auto 0 auto', '0 auto 0 auto', '0 auto 0 auto', '0 auto 0 0'],
  width: ['auto', 'auto', 'auto'],
}

const menuStyle = {
  display: ['block', 'block', 'block', 'none'],
  margin: ['0 auto 0 0', '0 auto 0 0', '0 auto 0 0', '0 auto 0 auto'],
}

const Logo: FC<ILogo> = ({ src, alt, width, height, isLogo, isScroll }) => (
  <Frame css={mq(isLogo ? (isScroll ? logoStyleFix : logoStyle) : menuStyle)}>
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={100}
      priority
    />
  </Frame>
)

export default Logo
