import styled from '@emotion/styled'

import { colors } from 'utils/constants'

const CardStyled = styled.div({
  background: colors.blueMild,
})

const Card = ({ title, children }) => (
  <CardStyled className='flex flex-col items-center p-10 m-10 w-2/5'>
    <h3 className='font-bold text-3xl pb-10'>{title}</h3>
    {children}
  </CardStyled>
)

export default Card
