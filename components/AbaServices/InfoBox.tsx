
import { FC } from 'react'

import { IExpand } from 'interfaces'
import { mq } from 'styles/styles'

const box_position = mq({
  width: ['100%', '100%', '100%', '400px'],
  margin: ['auto', 'auto', 'auto', 'auto']
})

const box = { width: '635px', height: '33%', margin: '0 auto 2.5rem auto', padding: 0 }
const boxSmall = mq({ width: '635px', height: '33%', margin: '0 0 2.5rem 0', paddingLeft: ['0', '0', '0', '8rem'] })

const InfoBox: FC<IExpand> = ({ isOpen, toggle, expand, small, title, children }) => (
  <div css={small ? boxSmall : box} className={small ? 'py-32' : 'pt-56'}>
    <h3 css={!small && box_position} className={small ? 'font-normal text-3xl' : 'font-bold text-3xl'}>{title}</h3>
    <p css={!small && box_position} className={!small && 'py-10'}>{children}</p>
    {expand && (
      <div onClick={toggle} css={!small && { width: '400px', margin: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <p className='text-lightBlue text-base font-semibold'>
          Our process 
        </p>
        <img src={`images/shared/${isOpen ? 'top_arrow_blue' : 'bottom_arrow_blue'}.png`} alt='arrow' />
      </div>
    )}
  </div>
)

export default InfoBox