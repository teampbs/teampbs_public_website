/** @jsxImportSource @emotion/react */
import Image from 'next/image'

import { Counter, Card, Subtitle, P } from 'components/Index/styles'
import { colors } from 'utils/constants'

export const MediaCard = ({ src, alt, title, text, number, dark }) => (
  <Card>
    <Counter>{number}</Counter>
    <Image src={src} alt={alt} width='80' height='80' />
    <Subtitle css={dark && { color: colors.white }}>{title}</Subtitle>
    <P>{text}</P>
  </Card>
)
