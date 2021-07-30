import Image from 'next/image'
import { FC } from 'react'

import Button from 'components/shared/Button'
import { IAvatar } from 'interfaces'
import Flexbox from 'components/shared/Flexbox'

const Avatar: FC<IAvatar> = ({ img, name, position, description, link }) => (
  <Flexbox
    css={{
      ':hover': { boxShadow: '0px 10px 28px rgb(0 0 0 / 5%)' },
      transition: 'box-shadow 0.3s',
      position: 'relative',
      textAlign: 'center',
    }}
    height='420px'
    width='25%'
    col
    margin='2.5rem'
    padding='.75rem'
    gap='.25rem'
  >
    <div
      css={{ height: '100px', width: '160px', position: 'absolute', top: -110 }}
    >
      <Image src={img} height='160' width='160' />
    </div>
    <h3 className='font-bold text-xl'>{name}</h3>
    <span className='pb-10'>{position}</span>
    <p>
      {description?.length > 150
        ? description.slice(0, 150) + '...'
        : description}
      <a
        css={{
          margin: '0 .5rem',
          textDecoration: 'underline',
          '& a:hover': {
            textDecoration: 'none',
          },
        }}
        href={`/pbs-team/${name}`}
      >
        More
      </a>
    </p>
    <Button>
      <a css={{
          margin: '0 .5rem',
          textDecoration: 'underline',
          '& a:hover': {
            textDecoration: 'none',
          },
        }} href={`mailto:${link}`}>
        {link}
      </a>
    </Button>
  </Flexbox>
)

export default Avatar
