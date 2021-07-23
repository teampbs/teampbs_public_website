import { qoutes } from "components/Careers/careers.mock"

const Slide = ({ text, className }) => (
  <div className={`pt-10 slide ${className}`}>
    <img className="float-left pr-3" src='/images/pages/careers/quote.png' alt='quote' />
    <p className="text-xl">{text}</p>
  </div>
)

export const QuoteSlider = () => (
  <div className="py-3">
    <h3 className="text-3xl font-bold">What our staff said</h3>
    <div className='slider'>
      {qoutes.map((q, id) => (
        <Slide key={id} className={q.className && id !== 1 && 'hidden'} text={q.p} />
      ))}
    </div>
    <div className='flex justify-between py-3'>
      <div className="flex">
        <div className="h-5 w-5">&#9679;</div>
        <div className="h-5 w-5">&#9679;</div>
        <div className="h-5 w-5">&#9679;</div>
        <div className="h-5 w-5">&#9679;</div>
      </div>
      <div className='flex'>
        <img className="w-3 mx-2 h-5" src='/images/pages/careers/prev.png' alt='left-arrow' />
        <img className="w-3 mx-2 h-5" src='/images/pages/careers/next.png' alt='right-arrow' />
      </div>
    </div>
  </div>
)