
import { FC } from 'react'

import { IExpand } from 'interfaces'
import { style } from 'components/AbaServices/style'

const InfoBox: FC<IExpand> = ({ isOpen, toggle, expand, small, title, children }) => (
  <div css={small ? style.boxSmall : style.box}>
    <h3 css={!small && style.box_position} className={small ? 'font-normal text-3xl' : 'font-bold text-3xl'}>{title}</h3>
    <p css={!small && style.box_position} className={!small && 'py-10'}>{children}</p>
    {expand && (
      <div onClick={toggle} css={!small && style.toggle}>
        <p css={isOpen ? {...style.expand.text, ...style.expand.arrow_up } : {...style.expand.text, ...style.expand.arrow_down}}>
          Our process 
        </p>
      </div>
    )}
  </div>
)

export default InfoBox