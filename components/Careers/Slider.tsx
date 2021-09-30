import { qoutes } from 'components/Careers/careers.mock'
import { style } from 'components/Careers/style'

const Slide = ({ text, className }) => (
  <div css={style.slider.qoute} className={`${className}`}>
    <p className='text-xl'>{text}</p>
  </div>
)

export const QuoteSlider = () => (
  <div css={style.slider.padding}>
    <h3 css={style.slider.title}>What our staff said</h3>
    <div className='slider'>
      {qoutes.map((q, id) => (
        <Slide
          key={id}
          className={q.className && id !== 1 && 'hidden'}
          text={q.p}
        />
      ))}
    </div>
    <div css={style.slider.wrapper}>
      <div css={style.slider.flex}>
        <div css={style.slider.dot}>&#9679;</div>
        <div css={style.slider.dot}>&#9679;</div>
        <div css={style.slider.dot}>&#9679;</div>
        <div css={style.slider.dot}>&#9679;</div>
      </div>
      <div css={[style.slider.arrows, style.slider.flex]} />
    </div>
  </div>
)
