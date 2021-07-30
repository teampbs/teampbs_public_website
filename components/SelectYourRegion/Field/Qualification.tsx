import { useState, FC } from 'react'

import { Input, Legend } from 'components/SelectYourRegion/styles'
import * as CustomInput from 'components/shared/Inputs/Input'
import Select from 'components/shared/Inputs/Select'
import Flexbox from 'components/shared/Flexbox'

const inputs = [
  { placeholder: 'Behavior Assistant(Not Certified Currently as RBT)', id: 'assistant',tab: 0 },
  { placeholder: 'Registered Behavior Technician(Certified RBT)', id: 'technician',tab: 1 },
  { placeholder: 'Analyst(Certified BCBA or BCABA)', id: 'analyst',tab: 2 },
]

const Qualification: FC<{ width?: string}> = ({ width = '100%' }) => {
  const [active, setActive] = useState(0)

  return (
    <Flexbox items='flex-end' col>
      {inputs.map(({ id, placeholder, tab }) => (
        <Input
          key={id}
          onClick={() => setActive(tab)}
          disabled={active === tab}
          type='text'
          id={id}
          placeholder={placeholder}
          width={width}
          bg={tab === 0 ||tab === 2}
          radius='0'
        />
      ))}
      <div className={`flex p-2 ${1 !== active && 'hidden'}`}>
        <CustomInput.default just='flex-end' label='RBT Certificate#' id='certificate' placeholder='X-XX-XXXXX' half />
      </div>
      <div className={`flex items-center p-2 ${2 !== active && 'hidden'}`}>
        <Legend>Analyst Type</Legend>
        <Select id='analyst_type' list={['Select', 'BCABA', 'BCBA', 'BCBA-D', 'Licensed Professional']} />
      </div>
    </Flexbox>
  )
}

export default Qualification
