/** @jsxImportSource @emotion/react */
import Image from 'next/image'

import { Box, BoxMq, Frame, AboutTitle } from 'components/Index/styles'

const Card = ({ src, alt, text }) => (
  <Box css={BoxMq}>
    <Frame>
      <Image src={src} alt={alt} width='80' height='80' />
    </Frame>
    <AboutTitle>{text}</AboutTitle>
  </Box>
)

export default Card
