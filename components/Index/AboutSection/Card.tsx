
import Image from 'next/image'

import { box, frame, aboutTitle } from 'components/Index/styles'

const Card = ({ src, alt, text }) => (
  <div css={box}>
    <div css={frame}>
      <Image src={src} alt={alt} width='80' height='80' />
    </div>
    <h4 css={aboutTitle}>{text}</h4>
  </div>
)

export default Card
