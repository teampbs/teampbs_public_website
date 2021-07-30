import { useState } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'
import Button from 'components/shared/Button'

const down = '/images/shared/arrow_down.png'
const up = '/images/shared/arrow_up.png'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 3px 7px rgb(48 74 90 / 5%)',
    background: colors.white,
    margin: '0 0 .75rem',
    padding: '.5rem 3rem',
  },
  title: {
    backgroundSize: '1.25rem 0.75rem',
    padding: '0 4rem',
    fontWeight: 700,
    fontSize: '1.5rem',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: '1rem',
    padding: '.5rem 4rem',
    color: colors.lightGray,
  },
  child: {
    flexDirection: 'column',
    gap: '2rem',
    lineHeight: '1.75rem',
    margin: '2.5rem 2.5rem 5rem 4rem',
    width: '80%',
    textAlign: 'left',
  },
  role: {
    backgroundSize: '1rem 0.5rem',
    padding: '2rem',
    fontWeight: 700,
    fontSize: '1rem',
    textAlign: 'left',
    borderTop: '1px solid #eee',
  },
}

const Expand = ({ title, text, roleDescription }) => {
  const [expand, setExpand] = useState(false)
  const [expandRole, setExpandRole] = useState(false)

  return (
    <div css={style.container as Interpolation<Theme>}>
      <div css={{ cursor: 'pointer' }} onClick={() => setExpand((prevState) => !prevState)}>
        <h3
          css={
            {
              background: `url(${expand ? up : down}) no-repeat left bottom`,
              ...style.title,
            } as Interpolation<Theme>
          }
        >
          {title}
        </h3>
        <p css={style.subtitle}>
          Location: <span css={{ color: colors.textGray }}>All Regions</span>
        </p>
      </div>
      <div hidden={!expand} css={style.child as Interpolation<Theme>}>
        <p css={{ color: colors.textGray }}>{text}</p>
        <div
          css={{ display: 'flex', flexDirection: 'column' }}
          onClick={() => setExpandRole((prevState) => !prevState)}
        >
          <h3
            css={
              {
                background: `url(${
                  expandRole ? up : down
                }) no-repeat left center`,
                ...style.role,
              } as Interpolation<Theme>
            }
          >
            Role description
          </h3>
          <Flexbox justify='' gap='1rem'>
            <Button>Apply Now</Button>
            <Button inverse icon>
              Share
            </Button>
          </Flexbox>
          <div hidden={!expandRole} css={style.child as Interpolation<Theme>}>
            <p css={{ color: colors.textGray }}>{roleDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expand
