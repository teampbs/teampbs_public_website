
import Image from 'next/image'
import { Interpolation, Theme } from '@emotion/react'

import { style } from 'components/Index/styles'
import { colors } from 'utils/constants'

export const MediaCard = ({ src, alt, title, text, number, dark }) => (
  <div css={style.works.card as Interpolation<Theme>}>
    <div css={style.works.counter}>{number}</div>
    <Image src={src} alt={alt} width='80' height='80' />
    <h2 css={[style.works.subtitle, dark && { color: colors.white }]}>{title}</h2>
    <p css={style.works.text}>{text}</p>
  </div>
)
