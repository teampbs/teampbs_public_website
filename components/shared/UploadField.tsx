import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { styles, Label, InputCustom, Button } from 'components/shared/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const UploadField: FC<{
  id: string
  label: string
}> = ({ id, label }) => {
  const { register } = useFormContext()
  const { width } = useWindowDimensions()

  return (
    <div css={styles.box}>
      <Label htmlFor={id}>{label}</Label>
      <InputCustom id={id} type='file' {...register(id)} />
      <Button>+ Click To Upload</Button>
      <div css={[width < 900 && { fontSize: '12px' }]} className='text-center'>
        <p>Please make sure your resume filename follows this convention:</p>
        <strong>Firstname_Lastname_Resume.docx</strong>
      </div>
    </div>
  )
}


export default UploadField
