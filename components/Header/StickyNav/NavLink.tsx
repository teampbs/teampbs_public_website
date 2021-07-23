/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import { FC, useState } from 'react'
import Image from 'next/image'

import { AnchorBold, mq } from 'styles/styles'
import { INavLink } from 'interfaces/index'
import DropdownLink from 'components/Header/StickyNav/DropdownLink'

const NavLink: FC<INavLink> = ({ title, links, isEmpty }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnchorBold
      css={mq({
        display: ['none', 'none', 'none', 'block'],
      })}
      className='flex-grow'
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='link flex items-center'>
        {isEmpty && (
          <Link href='/upcoming-events'>
            <a className='link'>
              <span>{title}</span>
            </a>
          </Link>
        )}
        {!isEmpty && (
          <div
            className='flex items-center'
            onMouseEnter={() => setIsOpen(true)}
          >
            <span className='link'>{title}</span>
            <span className='ml-4 flex justify-start'>
              <Image
                src='/images/pages/Index/nav_down.png'
                width='10'
                height='5'
              />
            </span>
          </div>
        )}
      </div>
      {!isEmpty && (
        <div
          className={`dropdown flex flex-col absolute left-0 top-10 rounded-md w-72 p-2.5 bg-white ${
            !isOpen && 'hidden'
          }`}
        >
          {links.map((link) => (
            <DropdownLink
              key={link.title}
              parentId={link.parentId}
              href={link.href}
              title={link.title}
            />
          ))}
        </div>
      )}
    </AnchorBold>
  )
}

export default NavLink
