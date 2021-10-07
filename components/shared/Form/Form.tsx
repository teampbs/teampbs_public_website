import { FormProvider, useForm } from 'react-hook-form'

import Card from 'components/SelectYourRegion/Card/Card'
import { Box } from 'components/SelectYourRegion/styles'
import { mq } from 'styles/styles'

const containerForm = mq({
  marginBottom: '10rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  '& .tab_block': {
    width: '100%'
  }
})

const Form = ({ children, url }) => {
  const methods = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    const res = await fetch(url, {
      body: JSON.stringify({
        data
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    await res.json()
  }
  const onError = error => console.error(error)

  return (
      <Box>
        <FormProvider {...methods}>
          <form css={containerForm} onSubmit={methods.handleSubmit(onSubmit, onError)}>
            {children}
            <Card num={0} title='Captcha' submit subtitle='verify to prevent spam' />
          </form>
        </FormProvider>
      </Box>
  )
}

export default Form
