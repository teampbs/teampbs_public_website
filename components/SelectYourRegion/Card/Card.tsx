import { FC } from 'react'

import {
  Text,
  Circle,
  ContainerForm,
  Info,
} from 'components/SelectYourRegion/styles'
import { ICard } from 'interfaces'
import Button from 'components/shared/Button'
import Table from 'components/SelectYourRegion/Card/Table/Table'
import ApplicantInfo from 'components/SelectYourRegion/Card/ApplicationInfo/ApplicantInfo'
import Education from 'components/SelectYourRegion/Card/Education/Education'
import References from 'components/SelectYourRegion/Card/References/References'
import Employment from 'components/SelectYourRegion/Card/Employment/Employment'
import Resume from 'components/SelectYourRegion/Card/Resume/Resume'
import LawInfo from 'components/SelectYourRegion/Card/LawInfo/LawInfo'
import OtherInfo from 'components/SelectYourRegion/Card/OtherInfo/OtherInfo'
import Authorization from 'components/SelectYourRegion/Card/Authorization/Authorization'
import useForm from 'Hooks/useForm'

const Card: FC<ICard> = ({
  num,
  isTable = false,
  title,
  subtitle,
  require,
  submit,
}) => {
  const { handleSubmit } = useForm()

  return (
    <div
      className={`flex ${
        isTable && 'flex-col'
      } bg-white justify-between w-3/5 relative p-10`}
    >
      {num !== 0 && <Circle>{num}</Circle>}
      <Info small={!require && title !== 'Resume'}>
        {require && (
          <Text red className='text-red-500'>
            Skip this section by uploading a resume
          </Text>
        )}
        <h3 className='font-bold text-2xl pb-3'>{title}</h3>
        <Text>{subtitle}</Text>
      </Info>
        <ContainerForm>
          {num === 1 && <ApplicantInfo />}
          {num === 2 && <Table />}
          {num === 3 && <LawInfo />}
          {num === 4 && <Education />}
          {num === 5 && <References />}
          {num === 6 && <Employment />}
          {num === 7 && <Resume />}
          {num === 8 && <OtherInfo />}
          {num === 9 && <Authorization />}
          {submit && <Button type='submit' children='submit' onSubmit={handleSubmit} />}
        </ContainerForm>
    </div>
  )
}

export default Card
