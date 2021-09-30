
import Image from 'next/image'

import { box, Frame, AboutTitle } from 'components/Index/styles'

const Card = ({ src, alt, text }) => (
  <div css={box}>
    <Frame>
      <Image src={src} alt={alt} width='80' height='80' />
    </Frame>
    <AboutTitle>{text}</AboutTitle>
  </div>
)

export default Card
