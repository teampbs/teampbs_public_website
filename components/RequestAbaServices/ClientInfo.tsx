import Input from 'components/shared/Inputs/Input'
import Select from 'components/shared/Inputs/Select'
import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import { colors } from 'utils/constants'
import { Btn, modifyErrMsg, stepControls } from 'components/shared/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { Interpolation, Theme } from '@emotion/react'
// import Button from 'components/shared/Button'

const status = ['', 'Male', 'Female']

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const customCss = [
  modifyErrMsg,
  {
  '& > div > input:last-child': {
    background: '#ddd',
    width: '40%',
  },
}]

const wrap = {
  display: 'flex',
  gap: 20,
  '& select': { width: '37.5rem' },
}

const grid = {
  display: 'grid',
  gridTemplateColumns: '30% 1fr',
  gridTemplateRows: '1fr',
  gridColumnGap: 10,
  gridRowGap: 0,
}

const inputStyle = {
  height: '3rem',
  width: '100%',
  border: `1px solid ${colors.blueGray}`,
  borderRadius: 5,
  textAlign: 'left',
  paddingLeft: 10,
  outline: 'none',
} as Interpolation<Theme>

const ClientInfo = ({ setStep }) => {
  const { width } = useWindowDimensions()

  return (
      <div
          css={[
            style.card_wrapper,
            width < 900 ? { flexDirection: 'column', top: 50, borderRadius: 5 } : { marginBottom: -70, top: -70, borderRadius: 5 },
          ]}
        >
          {width < 900 && (
            <div css={{ display: 'flex' }}>
              <div css={[style.circle, { left: 20 }]}>1</div>
              <Info css={{ width: '100%', margin: '0 0 2rem 4rem', gap: 0 }}>
                <h3 css={[style.heading, {padding: 0}]}>Client Information</h3>
                <Text>This is the person who will be receiving services</Text>
              </Info>
            </div>
          )}
          {width > 900 && (
            <>
              <div css={style.circle}>1</div>
              <Info css={{ width: '8rem' }}>
                <h3 css={style.heading}>Client Information</h3>
                <Text>This is the person who will be receiving services</Text>
              </Info>
            </>
          )}
          <div css={[wrapper, { padding: 0 }]}>
            <Flexbox items='' col gap='0.5rem'>
              <Input injectCss={modifyErrMsg} label='First Name' id='req_first_name' />
              <Input label='Middle Initial' id='req_middle_initial' />
              <Input injectCss={modifyErrMsg} label='Last Name' id='req_last_name' />
              {width > 900 ? (
                <Input
                  injectCss={customCss}
                  label='Date of birth'
                  half
                  second
                  secondDisabled
                  id='req_date'
                />
              ) : (
                <>
                  <label css={{ color: colors.textGray }} htmlFor="req_date_mobile">Date of birth</label>
                  <div css={{ display: 'flex' }}>
                    <input css={[inputStyle, { marginRight: 10 }]} type="text" />
                    <input css={[inputStyle, { border: 0, background: '#ddd' }]} type="text" disabled />
                  </div>
                </>
              )}
              <div
                css={wrap}
                >
              </div>
              <div
                css={width < 900 ? { display: 'flex', flexDirection: 'column-reverse' } : grid}
              >
                <div css={{ gridArea: '1 / 2 / 2 / 5' }}>
                  <Select id='req_gender' list={status} margin='0' />
                </div>
                <div css={width < 900 ? { marginBottom: 10, marginRight: 'auto', color: colors.textGray } : { gridArea: '1 / 1 / 2 / 2', textAlign: 'right', alignSelf: 'center', paddingRight: '1.5rem', color: colors.textGray, }}>
                  <label htmlFor='req_gender'>
                    Gender
                  </label>
                </div>
              </div>
              <Input injectCss={modifyErrMsg} label='Referred By' id='req_referred_by' />
              {width < 900 && (
                <div css={stepControls}>
                  <Btn css={{ visibility: 'hidden' }} />
                  <Btn onClick={() => setStep(2)}>Next</Btn>
                </div>
              )}
            </Flexbox>
          </div>
        </div>
  )
}

export default ClientInfo
