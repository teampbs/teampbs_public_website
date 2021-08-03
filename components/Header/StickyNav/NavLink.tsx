
import Link from 'next/link'
import { FC, useState } from 'react'

import { AnchorBold, mq } from 'styles/styles'
import { INavLink } from 'interfaces/index'
import DropdownLink from 'components/Header/StickyNav/DropdownLink'

const NavLink: FC<INavLink> = ({ title, links, isEmpty }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnchorBold
      css={mq({
        flexGrow: 1,
        display: ['none', 'none', 'none', 'block'],
      })}
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
            <p css={{ minWidth: '100%', transition: 'background 1s', marginRight: '1.5rem', background: `url(/images/pages/Index/nav_${isOpen ? 'up' : 'down'}.png) no-repeat`, backgroundPosition: '100% 50%' }}>{title}</p>
          </div>
        )}
      </div>
      {!isEmpty && (
        <div
          css={{boxShadow: '0px 10px 28px rgb(0 0 0 / 25%)'}}
          className={`flex flex-col absolute left-0 top-10 rounded-md w-72 p-2.5 bg-white ${
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
