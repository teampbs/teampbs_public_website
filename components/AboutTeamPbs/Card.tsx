import { mq } from 'styles/styles'

import { colors } from 'utils/constants'

const style = {
  card: mq({
    background: colors.blueMild,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem',
    margin: '2.5rem',
    width: ['80%', '80%', '80%', '40%']
  }),
  title: {
    fontWeight: 700,
    fontSize: '1.875rem',
    paddingBottom: '2.5rem',
  }
}

const Card = ({ title, children }) => (
  <div css={style.card}>
    <h3 css={style.title}>{title}</h3>
    {children}
  </div>
)

export default Card
