import { FC } from 'react'

import Field from 'components/SelectYourRegion/Field/Field'
import { P } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { field_list, field_list_last_two } from 'components/SelectYourRegion/mocks'

const ApplicantInfo: FC = () => {

  return (
    <Flexbox className='relative' col justify='flex-start' gap='0.5rem'>
      {field_list.map((f, index) => (
        <Field key={index} {...f} />
        ))}
      <P>
        By providing your mobile phone number, you agree to opt-in to receive PBS
        Employee Alerts text messages. Message frequency varies per user. Message
        and data rates may apply. Text STOP to opt out or HELP for help.
      </P>
      {field_list_last_two.map((f, index) => (
        <Field key={index} {...f} />
      ))}
    </Flexbox>
  )
}


export default ApplicantInfo
