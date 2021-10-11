
import Link from 'next/link'
import { FC, useState } from 'react'

import { styles } from 'components/Header/styles'
import { INavLink } from 'interfaces/index'
import DropdownLink from 'components/Header/StickyNav/DropdownLink'

const NavLink: FC<INavLink> = ({ title, links, isEmpty, isSticky, isSide }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      css={isSide ? styles.sideNavLink : styles.navLink}
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
            <p css={{ minWidth: '100%', transition: 'background 1s', marginRight: '1.5rem', background: `url(/images/pages/Index/nav_${isOpen ? 'up' : 'down'}${isSticky ? '_sticky' : ''}.png) no-repeat`, backgroundPosition: '100% 50%' }}>{title}</p>
          </div>
        )}
      </div>
      {!isEmpty && (
        <div css={isOpen ? styles.dropdownContainer : styles.hide}>
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
    </div>
  )
}

export default NavLink
