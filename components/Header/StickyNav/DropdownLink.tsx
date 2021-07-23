import Link from "next/link"
import { FC } from "react"

import { IDropDownLink } from 'interfaces/index'

const DropdownLink: FC<IDropDownLink> = ({ href, title }) => (
  <Link href={href}>
    <a className="leading-10 hover:bg-blue-50 rounded">
      <span className='font-bold text-sm text-textGray relative font-medium rounded-md h-full m-0 px-8'>
        {title}
      </span>
    </a>
  </Link>
)

export default DropdownLink