
import { FC } from 'react'
import Image from 'next/image'

import { Frame } from 'components/Header/styles'
import { ILogo } from 'interfaces'
import { mq } from 'styles/styles'
import Link from 'next/link'

const logoStyle = {
  margin: [
    '0 auto 1rem auto',
    '0 auto 1rem auto',
    '0 auto 1rem auto',
    '0 auto 0 0',
  ],
  width: ['150px', 'auto', 'auto', 'auto'],
}

const logoStyleFix = {
  margin: ['0 auto 0 auto', '0 auto 0 auto', '0 auto 0 auto', '0 auto 0 0'],
  width: ['150px', 'auto', 'auto', 'auto'],
}

const menuStyle = {
  display: ['block', 'block', 'block', 'none'],
  margin: ['0 auto 0 0', '0 auto 0 0', '0 auto 0 0', '0 auto 0 auto'],
}

const Logo: FC<ILogo> = ({ src, alt, width, height, isLogo, isScroll, link, setSidebar }) => (
  <Frame css={mq(isLogo ? (isScroll ? logoStyleFix : logoStyle) : menuStyle)} onClick={!isLogo ? setSidebar : null}>
    {link ? (
      <Link href={link}>
        <a>
          <Image
            width={width}
            height={height}
            src={src}
            alt={alt}
            quality={100}
            priority
          />
        </a>
      </Link>
    ) : (
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        quality={100}
        priority
      />
    )}
  </Frame>
)

export default Logo
