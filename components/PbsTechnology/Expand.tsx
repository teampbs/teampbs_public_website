import { Interpolation, Theme } from '@emotion/react'
import Image from 'next/image'
import { FC, useState } from 'react'

import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'
import { mq } from 'styles/styles'

interface IExpand {
  title: string
}

const down = '/images/shared/arrow_down.png'
const up = '/images/shared/arrow_up.png'

const style = {
  child: {
    lineHeight: '1.75rem',
    margin: '0 2.5rem 2.5rem 0',
    width: '80%',
    textAlign: 'left',
  },
  innerDiv: {
    display: 'flex',
    alignItems: 'center',
    padding: '2.5rem',
    marginLeft: '1rem',
  },
  outerDiv: mq({ 
    boxShadow: '0px 3px 7px rgb(48 74 90 / 5%)', 
    cursor: 'pointer',
    width: ['100%', '100%', '100%', '75%'],
    margin: '0.75rem 0 0 0',
  }),
  title: {
    backgroundSize: '1.25rem 0.75rem',
    padding: '0 4rem',
    fontWeight: 700,
    fontSize: '1.875rem',
    textAlign: 'left'
  },
  expandedBody: {
    alignItems: 'flex-start',
    padding: '0 8rem',
    marginBottom: '2.5rem',
  }
}

const Expand: FC<IExpand> = ({ title, children }) => {
  const [expand, setExpand] = useState(false)

  return (
    <Flexbox
      items=''
      col
      background={colors.white}
      css={style.outerDiv}
    >
      <div
        css={style.innerDiv}
        onClick={() => setExpand((prevState) => !prevState)}
      >
        <h3
          css={{
            background: `url(${expand ? up : down}) no-repeat left center`,
            ...style.title
          } as Interpolation<Theme>}
        >
          {title}
        </h3>
      </div>
      <div
        css={{
          display: `${expand ? 'flex' : 'none'}`,
          ...style.expandedBody
        }}
      >
        <div css={style.child as Interpolation<Theme>}>{children}</div>
        <Image
          width='240'
          height='240'
          src='/images/pages/PbsTechnology/expand_img.png'
          alt='expand_img'
        />
      </div>
    </Flexbox>
  )
}

export default Expand
