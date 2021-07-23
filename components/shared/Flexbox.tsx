import { FC } from 'react'

import { IFlex } from 'interfaces'
import { FlexWrap } from 'components/shared/styles'

const Flexbox: FC<Partial<IFlex>> = props => (
  <FlexWrap {...props}>
    {props.children}
  </FlexWrap>
)

export default Flexbox
