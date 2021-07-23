import { FC } from 'react'

import UploadField from 'components/shared/UploadField'
import Flexbox from 'components/shared/Flexbox'

const Resume: FC = ()  => (
  <Flexbox col gap='0.5rem'>
    <UploadField label='Your Resume' id='your_resume' />
  </Flexbox>
)

export default Resume