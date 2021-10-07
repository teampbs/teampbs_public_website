import Input from 'components/shared/Inputs/Input'
import Select from 'components/shared/Inputs/Select'
import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import { colors } from 'utils/constants'
import { counties } from 'components/SelectYourRegion/mocks'
import Button from 'components/shared/Button'
import { Btn, modifyErrMsg, stepControls } from 'components/shared/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { Interpolation, Theme } from '@emotion/react'

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const selectWrap = {
  display: 'flex',
  flexDirection: 'column-reverse',
} as Interpolation<Theme>

const selectWrapDesktop = {
  display: 'flex',
  flexDirection: 'row-reverse',
} as Interpolation<Theme>

const mb = {
  marginBottom: '2rem',
}

const selectBox = {
  alignSelf: 'flex-start',
  textAlign: 'right',
  paddingRight: '1.5rem',
  color: colors.textGray,
} as Interpolation<Theme>

const inputStyle = {
  height: '3rem',
  width: '100%',
  border: `1px solid ${colors.blueGray}`,
  borderRadius: 5,
  textAlign: 'left',
  paddingLeft: 10,
  outline: 'none',
} as Interpolation<Theme>

const ParentInfo = ({ setStep }) => {
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
          <div css={[style.circle, { left: 20 }]}>2</div>
          <Info css={{ width: '100%', margin: '0 0 2rem 4rem', gap: 0 }}>
            <h3 css={[style.heading, { padding: 0 }]}>
              Parent/Guardian Information
            </h3>
            <Text>Parent details</Text>
          </Info>
        </div>
      )}
      {width > 900 && (
        <>
          <div css={style.circle}>2</div>
          <Info css={{ width: '8rem' }}>
            <h3 css={style.heading}>Parent/Guardian Information</h3>
            <Text>Parent details</Text>
          </Info>
        </>
      )}
      <div css={[wrapper, { padding: 0 }]}>
        <Flexbox items='' col gap='0.5rem'>
          <Input injectCss={modifyErrMsg} label='Email' id='req_email' />
          <Input
            injectCss={modifyErrMsg}
            label='First Name'
            id='req_parent_first_name'
          />
          <Input label='Middle Name' id='req_middle_name' />
          <Input
            injectCss={modifyErrMsg}
            label='Last Name'
            id='req_parent_last_name'
          />
          <div css={mb}>
            <Input
              label='Date of birth'
              half={width > 900}
              id='req_parent_date'
              injectCss={modifyErrMsg}
            />
          </div>
          <Input
            injectCss={modifyErrMsg}
            label='Street Address'
            id='req_parent_address'
          />
          {width < 900 ? (
            <div css={{ display: 'flex', gap: '1rem' }}>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <label
                  css={{
                    marginBottom: 10,
                    marginRight: 'auto',
                    color: colors.textGray,
                  }}
                  htmlFor='req_parent_city_mobile'
                >
                  City
                </label>
                <input css={inputStyle} type='text' />
              </div>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <label
                  css={{
                    marginBottom: 10,
                    marginRight: 'auto',
                    color: colors.textGray,
                  }}
                  htmlFor='req_parent_postal_mobile'
                >
                  Postal Code
                </label>
                <input css={[inputStyle, {}]} type='text' placeholder='XXXXX' />
              </div>
            </div>
          ) : (
            <>
              <Input
                injectCss={modifyErrMsg}
                label='City'
                id='req_parent_city'
                half
              />
              <Input
                injectCss={modifyErrMsg}
                label='Postal Code'
                id='req_parent_postal'
                half
                placeholder='XXXXX'
              />
            </>
          )}
          <div
            css={
              width < 900 ? [selectWrap, { width: '100%' }] : selectWrapDesktop
            }
          >
            <div css={{ width: '100%' }}>
              <Select id='req_parent_county' list={counties} margin='0' />
            </div>
            <div
              css={[
                selectBox,
                width > 900 && {
                  minWidth: 'calc(30% + .5rem)',
                  paddingRight: '1.5rem',
                },
              ]}
            >
              <label htmlFor='req_parent_county'>State</label>
            </div>
          </div>
          <div
            css={
              width < 900
                ? [selectWrap, mb, { width: '100%' }]
                : selectWrapDesktop
            }
          >
            <div css={{ width: '100%' }}>
              <Select id='req_parent_county' list={counties} margin='0' />
            </div>
            <div
              css={[
                selectBox,
                width > 900 && { minWidth: 'calc(30% + .5rem)' },
              ]}
            >
              <label htmlFor='req_parent_county'>County</label>
            </div>
          </div>
          <Input
            injectCss={modifyErrMsg}
            label='Home Phone'
            id='req_parent_home'
            half={width > 900}
            placeholder='( _ _ _ ) _ _ _  _ _ _ _'
          />
          <Input
            label='Work Phone'
            id='req_parent_work'
            half={width > 900}
            placeholder='( _ _ _ ) _ _ _  _ _ _ _'
          />
          <Input
            label='Mobile Phone'
            id='req_parent_mobile'
            half={width > 900}
            placeholder='( _ _ _ ) _ _ _  _ _ _ _'
          />
          <p
            css={{
              boxSizing: 'border-box',
              color: 'rgba(36, 44, 55, .65)',
              display: 'block',
              fontFamily: `"Open Sans",sans-serif`,
              lineHeight: 'normal',
              padding: '1rem 0',
              textAlign: 'left',
            }}
          >
            By providing your mobile phone number, you agree to opt-in to
            receive{' '}
            <a css={{ color: colors.lightBlue, cursor: 'pointer' }}>
              PBS Notifications
            </a>{' '}
            text messages. Message frequency varies per user. Message and data
            rates may apply. Text STOP to opt out or HELP for help.
          </p>
          <div css={selectWrap}>
            <div css={{ gridArea: '1 / 2 / 2 / 5' }}>
              <Select
                id='req_parent_status'
                list={['Single', 'Marred', 'Divorced']}
                margin='0'
              />
              <p
                css={{
                  boxSizing: 'border-box',
                  color: 'rgba(36, 44, 55, .65)',
                  fontFamily: `"Open Sans",sans-serif`,
                  fontSize: '80%',
                  fontWeight: 400,
                  lineHeight: '19.2px',
                  padding: '0 .5rem',
                }}
              >
                Used only for internal communications & billing purpose
              </p>
            </div>
            <div
              css={{
                gridArea: '1 / 1 / 2 / 2',
                textAlign: 'right',
                alignSelf: 'center',
                paddingRight: '1.5rem',
                color: colors.textGray,
                marginTop: '-1rem',
              }}
            >
              <label htmlFor='req_parent_status'>Martial Status</label>
            </div>
          </div>
          <div css={{ width: '30%', margin: '2rem auto' }}>
            <Button width='100%' inverse>
              + Add Parent/Caregiver
            </Button>
          </div>
          {width < 900 && (
            <div css={stepControls}>
              <Btn inverse onClick={() => setStep(1)}>
                Previous
              </Btn>
              <Btn onClick={() => setStep(3)}>Next</Btn>
            </div>
          )}
        </Flexbox>
      </div>
    </div>
  )
}

export default ParentInfo
