import styled from "@emotion/styled"
import Button from "components/shared/Button"
import { IAvatar } from "interfaces"
import Image from "next/image"
import { FC } from "react"

const A = styled.a({
  textDecoration: 'underline',
  '& a:hover': {
    textDecoration: 'none',
  }
})

const Avatar: FC<IAvatar> = ({
  img,
  name,
  position,
  description,
  link,
}) => (
  <div className='flex flex-col items-center w-96 m-10 p-3 border gap-1 rounded-2xl'>
    <Image src={img} height="160" width="160" />
    <h3 className='font-bold text-xl'>{name}</h3>
    <span className='pb-10'>{position}</span>
    <p>
      {description?.length > 150 ? description.slice(0, 150) + '...' : description}
      <A className="mx-2" href={`/pbs-team/${name}`}>More</A>
    </p>
    <Button><A className="mx-2" href='#'>{link}</A></Button>
  </div>
)

export default Avatar