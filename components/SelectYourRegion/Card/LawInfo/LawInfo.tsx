import { FC } from 'react'
import styled from '@emotion/styled'

import Select from 'components/shared/Select'
import Textarea from 'components/shared/Textarea'
import Checkbox from 'components/shared/Checkbox'
import { colors } from 'utils/constants'
import { degrees } from '../../mocks'

const Legend = styled.p<{ margin?: string }>(props => ({
  color: colors.textGray,
  width: '40%',
  whiteSpace: 'nowrap',
  textAlign: 'right',
  marginRight: props.margin
}))

const Flex = styled.div({
  display: 'flex',
  width: '100%',
})

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '100%'
})

const LawInfo: FC = () => (
  <div className='flex flex-col gap-2'>
    <Flex>
      <Legend>Languages Spoken</Legend>
      <Box>
        <div className='mb-10'>
          <Checkbox bg id='en' label='English' />
          <Checkbox id='es' label='Spanish' />
        </div>
        <div className='mb-10'>
          <Checkbox id='felony' label='I have been convicted of a felony' />
        </div>
        <Textarea
          height='200px'
          id='description'
          label='Please type a brief description of your experience specifically in the field of Behavior Analysis or working with disabilities.'
        />
        <Textarea
          height='45px'
          id='hear'
          label='How did you hear about Team PBS?'
        />
      </Box>
    </Flex>
    <Flex>
      <Legend>Highest Degree</Legend>
      <Box>
        <Select id='degrees' list={degrees} />
        <Checkbox
          id='coursework'
          label='Are you currently enrolled in Behavior Analysis coursework?'
        />
        <Checkbox id='npi_number' label='I have a NPI number' />
      </Box>
    </Flex>
  </div>
)

export default LawInfo
