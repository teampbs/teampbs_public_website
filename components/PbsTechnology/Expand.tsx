import Image from "next/image"
import { FC, useState } from "react"

interface IExpand {
  title: string
}

const down = '/images/pages/careers/arrow-down.png'
const up = '/images/pages/careers/arrow-up.png'

const Expand: FC<IExpand> = ({ title, children }) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className='flex flex-col text-left bg-white shadow mt-3 w-3/4'>
      <div className='flex items-center p-10' onClick={() => setExpand(prevState => !prevState)}>
        <img
          src={expand ? up : down}
          alt='arrow-down'
          className='h-3 w-5 mx-10'
        />
        <h3 className='text-3xl font-bold'>{title}</h3>
      </div>
      <div className={`items-start px-32 ml-3 mb-10 flex ${expand ? 'flex' : 'hidden'}`}>
        <div className='leading-7 mb-10 mr-10 w-4/5'>
          {children}
        </div>
        <Image
          width='240'
          height='240'
          src='/images/pages/PbsTechnology/expand_img.png'
          alt='expand_img'
        />
      </div>
    </div>
  )
}

export default Expand