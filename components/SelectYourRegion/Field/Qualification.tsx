import { useState, FC } from 'react'

import { Input, Legend } from 'components/SelectYourRegion/styles'
import * as CustomInput from 'components/shared/Inputs/Input'
import Select from 'components/shared/Inputs/Select'
import Flexbox from 'components/shared/Flexbox'

const tabs = [
  { placeholder: 'Behavior Assistant(Not Certified Currently as RBT)', id: 'assistant',tab: 0 },
  { placeholder: 'Registered Behavior Technician(Certified RBT)', id: 'technician',tab: 1 },
  { placeholder: 'Analyst(Certified BCBA or BCABA)', id: 'analyst',tab: 2 },
]

const analystNames = ['Select', 'BCABA', 'BCBA', 'BCBA-D', 'Licensed Professional']

const hide = { display: 'none' }

const subInput = { display: 'flex', padding: '.5rem' }

const Qualification: FC<{ width?: string}> = ({ width }) => {
  const [active, setActive] = useState(0)

  return (
    <Flexbox items='flex-end' col>
        {tabs.map(({ id, placeholder, tab }) => (
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
      <div css={1 !== active ? hide : subInput}>
        <CustomInput.default just='flex-end' label='RBT Certificate#' id='certificate' placeholder='X-XX-XXXXX' half />
      </div>
      <div css={2 !== active ? hide : [subInput, { alignItems: 'center' }]}>
        <Legend>Analyst Type</Legend>
        <Select id='analyst_type' list={analystNames} />
      </div>
    </Flexbox>
  )
}

Qualification.defaultProps = {
  width: '100%'
}

export default Qualification
