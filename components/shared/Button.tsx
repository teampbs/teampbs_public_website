

import Image from 'next/image'
import { FC } from 'react'

import { Btn } from 'components/shared/styles'
import { mq } from 'styles/styles'

interface IButton {
  icon?: boolean
  onSubmit?: any
  type?: any
  width?: string
  padding?: string
  navBtn?: boolean
  isScroll?: boolean
  inverse?: boolean
  height?: string
}

const scrollOn = mq({
  margin: ['0 0 0 0', '0 0 0 0', '0 0 0 0', '0 0 0 0'],
})

const scrollOff = mq({
  margin: ['0 0 1rem 0', '0 0 1rem 0', '0 0 1rem 0', '0 0 0 0'],
})

const Button: FC<IButton> = ({
  width,
  padding,
  type,
  children,
  icon,
  onSubmit,
  navBtn,
  isScroll,
  inverse,
  height,
}) => (
  <Btn
    height={height}
    inverse={inverse}
    padding={padding}
    width={width}
    type={type}
    onSubmit={onSubmit}
    className={icon && 'flex justify-between items-center'}
    css={navBtn && isScroll ? scrollOn : scrollOff}
  >
    {children}
    {icon && (
      <Image
        width='8'
        height='13'
        src={`/images/shared/${inverse ? 'right_arrow_blue' : 'arrow_right'}.png`}
        alt='blue arrow'
      />
    )}
  </Btn>
)

Button.defaultProps = {
  width: '180px',
  padding: '0 32px',
  type: 'button',
}

export default Button
