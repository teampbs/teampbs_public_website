
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

const Button: FC<IButton> = ({
  width = '180px',
  padding = '0 32px',
  type = 'button',
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
    css={navBtn && mq(!isScroll ? {
      margin: ['0 0 1rem 0', '0 0 1rem 0', '0 0 1rem 0', '0 0 0 0']
    } : {
      margin: ['0 0 0 0', '0 0 0 0', '0 0 0 0', '0 0 0 0']
    })}
  >
    {children}
    {icon && (
      <Image
        width='8'
        height='13'
        src={inverse ? '/images/shared/right_arrow_blue.png' : '/images/arrow-right.png'}
        alt='blue arrow'
      />
    )}
  </Btn>
)

export default Button
