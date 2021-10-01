import { useState } from 'react'
import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import Input from 'components/shared/Inputs/Input'
import { Interpolation, Theme } from '@emotion/react'
import { styles, Label, InputCustom, Button, modifyErrMsg } from 'components/shared/styles'
import Checkbox from 'components/shared/Checkbox'
import { useWindowDimensions } from '@hooks/useWindowsDimensions'

const btnUploadStyle = { width: '12rem', margin: '-1rem 0 0 0' }

const insuranceBox = {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: '.3rem',
  alignSelf: 'flex-end',
  marginBottom: '3rem',
} as Interpolation<Theme>

const consentTabs = {
  width: '10rem',
  height: '3rem',
  display: 'flex',
  padding: 0,
}

const tabStyleInsurance = {
  padding: '0 2rem',
  height: '3rem',
  display: 'flex',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
}

const insuranceStyle = {
  width: '50%',
  marginRight: '.5rem',
  padding: '.3rem',
  '& ~ .left-tab': { borderRadius: '.25rem 0 0 .25rem' },
  '& ~ .right-tab': { borderRadius: '0 .25rem .25rem 0' },
}

const uplInp = [
  styles.box,
  {
    height: 150,
    color: 'rgba(36, 44, 55, .65)',
  },
]

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const activeTab = {
  background: '#FFF',
  color: '#48b2f4',
}

const cardInfoWrap = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
} as Interpolation<Theme>

const list = {
  color: 'rgba(36, 44, 55, .65)',
  fontFamily: `"Open Sans",sans-serif`,
  lineHeight: '24px',
  margin: '15px',
  padding: 0,
  textAlign: 'left',
  listStyleType: 'disc',
} as Interpolation<Theme>

const disclaimer = {
  boxSizing: 'border-box',
  color: 'rgba(36, 44, 55, .65)',
  fontFamily: `"Open Sans",sans-serif`,
  lineHeight: '24px',
  margin: '2rem 0 0 0',
  padding: 0,
  textAlign: 'left',
} as Interpolation<Theme>

const tabs = {
  display: 'flex',
}

const tabStyle = {
  padding: '1rem 2rem',
  border: '1px solid #d8e7f3',
  background: '#eff1f3',
  color: '#898e95',
  fontFamily: `"Open Sans",sans-serif`,
  cursor: 'pointer',
  transition: 'all 0.3s',
}

const item = {
  padding: '.3rem',
}

const lnIds = [
  { id: 1, name: 'Yes' },
  { id: 2, name: 'No' },
]

const tabIds = [
  { id: 1, name: 'Medicaid' },
  { id: 2, name: 'Insurance' },
  { id: 3, name: 'Private Pay' },
]

const Payment = () => {
  const [active, setActive] = useState(3)
  const [consent, setConsent] = useState(1)
  const [insurance, setInsurance] = useState(2)

  const { width } = useWindowDimensions()

  return (
    <div css={[style.card_wrapper, width < 900 && { flexDirection: 'column', top: 50, borderRadius: 5 }]}>
      {width < 900 && (
        <div css={{ display: 'flex' }}>
          <div css={[style.circle, { left: 20 }]}>4</div>
          <div css={cardInfoWrap}>
            <Info css={{ width: '100%', margin: '0 0 2rem 4rem', gap: 0 }}>
              <h3 css={style.heading}>Payment Source</h3>
              <Text>How would you like to pay for services?</Text>
            </Info>
            {active === 2 && (
              <Info>
                <h3 css={style.heading}>Card Upload</h3>
                <Text>Upload your card images</Text>
              </Info>
            )}
          </div> 
        </div>
      )}
      {width > 900 && (
        <>
          <div css={style.circle}>4</div>
          <Info css={{ width: '8rem' }}>
            <h3 css={style.heading}>Payment Source</h3>
            <Text>How would you like to pay for services?</Text>
          </Info>
        </>
      )}
      <div css={[wrapper, { padding: 0 }]}>
        <Flexbox
          items='flex-end'
          justify=''
          col
          gap='0.5rem'
          css={{ color: 'rgba(36,44,55,.65)' }}
        >
          <div css={[tabs, { justifyContent: 'flex-end' }]}>
            <p css={{ padding: '1rem' }}>Select source</p>
            <div css={{ display: 'flex' }}>
              {tabIds.map(({ id, name }, index) => (
                <div
                  key={index}
                  css={[tabStyle, {width: '10.8rem'}, active === id && activeTab]}
                  id={`tab_id_${id}`}
                  onClick={() => setActive(id)}
                >
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          {active === 1 && (
            <>
              <Input injectCss={{ '& #req_ins_medicaid': { width: '22rem' }}} label='Medicaid #' id='req_ins_medicaid' />
              <Flexbox justify='' items='center'>
                <p
                  css={{
                    padding: '.5rem',
                    whiteSpace: 'nowrap',
                    margin: 0,
                  }}
                >
                  Initial consent to services
                </p>
                {lnIds.map(({ id, name }, index) => (
                  <div
                    key={index}
                    css={[
                      tabStyle,
                      consentTabs,
                      consent === id && activeTab,
                    ]}
                    id={`tab_id_${id}`}
                    onClick={() => setConsent(id)}
                  >
                    <span css={{ margin: 'auto' }}>{name}</span>
                  </div>
                ))}
              </Flexbox>
              <p css={disclaimer}>
                By clicking Yes(and providing your signature below) you are
                ensuring you are the legal guardian and have the authority to
                make decisions and provide consent for the client that is
                applying for services. In addition you are giving PBS Corp
                permission to:
              </p>
              <ul css={list}>
                <li css={item}>
                  Directly request comprehensive diagnostic evaluations and
                  referral documentation from health care providers
                </li>
                <li css={item}>
                  Begin the assessment and behavior plan development process.
                </li>
                <li css={item}>
                  To use or disclose your protected health information(PHI) for
                  treatment, payment and health care operations purpose.
                </li>
              </ul>
            </>
          )}
          {active === 2 && (
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 0',
              }}
            >
              {/* TODO title of subsection */}
              {/* <p css={{ padding: '1rem' }}>Insurance</p> */}
              <div css={insuranceBox}>
                <Input label='Company Name' id='req_ins_company_name' />
                <Input injectCss={[modifyErrMsg, { '& .errMsg': { marginLeft: '11.5rem' } }]} label='Card Holder Name' id='req_ins_card_holder_name' />
                <Input injectCss={[modifyErrMsg, { '& .errMsg': { marginLeft: '11.5rem' } }]} label='Date of Birth' id='req_ins_date_of_birth' />
                <Input
                injectCss={[modifyErrMsg, { '& .errMsg': { marginLeft: '11.5rem' } }]}
                  label='Last 4 digit of insured SSN'
                  id='req_ins_digit'
                  type='number'
                />
                <Input
                  label='Member Number'
                  id='req_ins_member_number'
                  type='number'
                />
                <Input injectCss={[modifyErrMsg, { '& .errMsg': { marginLeft: '11.5rem' } }]} label='Group Number' id='req_ins_digit' type='number' />
                <Flexbox justify='' items=''>
                  <p css={insuranceStyle}>Do you have secondary insurance?</p>
                  {lnIds.map(({ id, name }, index) => (
                    <div
                      key={index}
                      className={id === 1 ? 'left-tab' : 'right-tab'}
                      css={[
                        tabStyle,
                        tabStyleInsurance,
                        insurance === id && activeTab,
                      ]}
                      id={`tab_id_${id}`}
                      onClick={() => setInsurance(id)}
                    >
                      <span css={{ margin: 'auto' }}>{name}</span>
                    </div>
                  ))}
                </Flexbox>
                {insurance === 1 && (
                  <>
                    <Input
                    label='Company Name'
                    id='req_ins_add_company_name'
                    />
                    <Input
                    label='Member Number'
                    id='req_ins_add_member_number'
                    type='number'
                    />
                    <Input
                    label='Group Number'
                    id='req_ins_add_group_number'
                    type='number'
                    />
                  </>
                )}
              </div>
              <div css={{ display: 'flex', gap: '2rem' }}>
                <div css={uplInp}>
                  <Label htmlFor='front_card'>Front of the card</Label>
                  <InputCustom id='front_card' type='file' />
                  <Button css={btnUploadStyle}>
                    + Click To Upload
                  </Button>
                </div>
                <div css={uplInp}>
                  <Label htmlFor='back_card'>back of the card</Label>
                  <InputCustom id='back_card' type='file' />
                  <Button css={btnUploadStyle}>
                    + Click To Upload
                  </Button>
                </div>
              </div>
              <p css={{ marginTop: '.5rem', '& ~ div': { margin: '2rem 0' } }}>
                If your card is on a single image please upload it in both
                places.
              </p>
              <Checkbox id='req_check_payment' label='If you are unable to upload an image, please check this box and we will get in touch with you to help.' />
            </div>
          )}
        </Flexbox>
      </div>
    </div>
  )
}

export default Payment
