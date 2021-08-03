import { Interpolation, Theme } from '@emotion/react'

import { qoutes } from 'components/Careers/careers.mock'
import { style } from 'components/Careers/style'

const Slide = ({ text, className }) => (
  <div css={style.slider.qoute} className={`${className}`}>
    <p className='text-xl'>{text}</p>
  </div>
)

export const QuoteSlider = () => (
  <div className='py-3'>
    <h3 className='text-3xl font-bold'>What our staff said</h3>
    <div className='slider'>
      {qoutes.map((q, id) => (
        <Slide
          key={id}
          className={q.className && id !== 1 && 'hidden'}
          text={q.p}
        />
      ))}
    </div>
    <div className='flex justify-between py-3'>
      <div className='flex'>
        <div className='h-5 w-5'>&#9679;</div>
        <div className='h-5 w-5'>&#9679;</div>
        <div className='h-5 w-5'>&#9679;</div>
        <div className='h-5 w-5'>&#9679;</div>
      </div>
      <div css={style.slider.arrows as Interpolation<Theme>} className='flex' />
    </div>
  </div>
)
