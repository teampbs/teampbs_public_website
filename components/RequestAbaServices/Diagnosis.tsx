import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import {
  styles,
  Label,
  InputCustom,
  Button,
  Btn,
  stepControls,
} from 'components/shared/styles'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'
// import Input from 'components/shared/Inputs/Input'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { mq } from 'styles/styles'

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const uplInp = [
  styles.box,
  {
    height: 150,
    color: 'rgba(36, 44, 55, .65)',
  },
]

const text = {
  position: 'absolute',
  bottom: 80,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  textAlign: 'center',
} as Interpolation<Theme>

const btn = mq({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: ['calc(90% - 1rem)', '20rem', '20rem', '20rem'],
  whiteSpace: 'nowrap',
}) as Interpolation<Theme>

const Diagnosis = ({ setStep }) => {
  const { width } = useWindowDimensions()

  return (
    <div
      css={[
        style.card_wrapper,
        width < 900 && { flexDirection: 'column', top: 50, borderRadius: 5 },
      ]}
    >
      {width < 900 && (
        <div css={{ display: 'flex' }}>
          <div css={[style.circle, { left: 20 }]}>5</div>
          <Info css={{ width: '100%', margin: '0 0 2rem 4rem', gap: 0 }}>
            <h3 css={[style.heading, { padding: 0 }]}>Diagnosis</h3>
            <Text>Upload your diagnosis images</Text>
          </Info>
        </div>
      )}
      {width > 900 && (
        <>
          <div css={style.circle}>5</div>
          <Info css={{ width: '8rem' }}>
            <h3 css={style.heading}>Diagnosis</h3>
            <Text>Upload your diagnosis images</Text>
          </Info>
        </>
      )}
      <div css={[wrapper, { padding: 0 }]}>
        <Flexbox col items={width < 900 ? 'stretch' : 'flex-end'} gap='1rem'>
          <div css={uplInp}>
            <Label htmlFor='diagnosis '></Label>
            <InputCustom id='diagnosis' type='file' />
            <Button css={btn}>+ Click To Upload</Button>
            <p css={text}>One or more diagnosis images</p>
          </div>
          {/* <Input
            nowrap
            injectCss={{ '& input': { width: '20rem' } }}
            label='Name of the doctor that diagnosed your child'
            id='req_child'
          />
          <Input
            nowrap
            injectCss={{ '& input': { width: '20rem' } }}
            label='Date of Diagnosis'
            id='req_diagnosis'
          /> */}
        </Flexbox>
        {width < 900 && (
          <div css={stepControls}>
            <Btn inverse onClick={() => setStep(4)}>
              Previous
            </Btn>
            <Btn onClick={() => setStep(6)}>Next</Btn>
          </div>
        )}
      </div>
    </div>
  )
}

export default Diagnosis
