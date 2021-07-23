import { FC } from 'react'

import useForm from 'Hooks/useForm'
import { Box, Label, InputCustom, Button } from 'components/shared/styles'

const UploadField: FC<{
  id: string
  label: string
}> = ({ id, label }) => {
  const { handleChange } = useForm()

  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <InputCustom id={id} type='file' onChange={handleChange} />
      <Button>+ Click To Upload</Button>
      <div className='text-center'>
        <p>Please make sure your resume filename follows this convention:</p>
        <strong>Firstname_Lastname_Resume.docx</strong>
      </div>
    </Box>
  )
}

export default UploadField
