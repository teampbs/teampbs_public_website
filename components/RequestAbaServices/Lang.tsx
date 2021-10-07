import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import Select from 'components/shared/Inputs/Select'
import { colors } from 'utils/constants'
import { languages } from 'components/SelectYourRegion/mocks'
import { useState } from 'react'
import { Interpolation, Theme } from '@emotion/react'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { Btn, stepControls } from 'components/shared/styles'
import { mq } from 'styles/styles'

const wrapper = {
  display: 'flex',
  paddingRight: 100,
  width: '100%',
  padding: 0,
  flexDirection: 'column',
  gap: 10,
} as Interpolation<Theme>

const selectWrap = {
  display: 'flex',
}

const mb = {
  marginBottom: '2rem',
}

const tabIds = [
  { id: 1, name: 'English' },
  { id: 2, name: 'Other' },
]

const activeTab = {
  background: '#FFF',
  color: '#48b2f4',
}

const tabStyle = mq({
  padding: ['.5rem 1rem', '.5rem 1rem', '1rem 2rem', '1rem 2rem'],
  border: '1px solid #d8e7f3',
  background: '#eff1f3',
  color: '#898e95',
  fontFamily: `"Open Sans",sans-serif`,
  cursor: 'pointer',
  width: '100%',
  transition: 'all 0.3s',
  textAlign: 'center',
})

const label = {
  textAlign: 'right',
  alignSelf: 'center',
  paddingRight: '1.5rem',
  color: colors.textGray,
  width: '120%',
} as Interpolation<Theme>

const Lang = ({ setStep }) => {
  const [active, setActive] = useState(1)

  const { width } = useWindowDimensions()

  return (
    <div css={[style.card_wrapper, width < 900 && { flexDirection: 'column', top: 50, borderRadius: 5 }]}>
      {width < 900 && (
        <div css={{ display: 'flex' }}>
          <div css={[style.circle, { left: 20 }]}>6</div>
          <Info css={{ width: '100%', margin: '0 0 2rem 4rem', gap: 0 }}>
            <h3 css={[style.heading, {padding: 0}]}>Language</h3>
            <Text>Primary language spoken</Text>
          </Info>
        </div>
      )}
      {width > 900 && (
        <>
          <div css={style.circle}>6</div>
          <Info css={{ width: '8rem' }}>
            <h3 css={style.heading}>Language</h3>
            <Text>Primary language spoken</Text>
          </Info>
        </>
      )}
      <div css={wrapper}>
        <Flexbox col={width < 500} justify='' items=''>
          <p css={[{ padding: '1rem', whiteSpace: 'nowrap', color: colors.textGray }, width < 500 && { textAlign: 'center' }]}>Select language</p>
          {tabIds.map(({ id, name }, index) => (
            <div
              key={index}
              css={[tabStyle, active === id && activeTab]}
              id={`tab_id_${id}`}
              onClick={() => setActive(id)}
            >
              <span>{name}</span>
            </div>
          ))}
        </Flexbox>
        {active === 2 && (
          <div css={[selectWrap, mb, width < 500 && { flexDirection: 'column', gap: '1rem', marginTop: '2rem' }]}>
            <label
              css={label}
              htmlFor='req_parent_county'
            >
              What is your primary Language spoken?
            </label>
            <Select id='req_parent_county' list={languages} margin='0' />
          </div>
        )}
        {width < 900 && (
          <div css={stepControls}>
            <Btn inverse onClick={() => setStep(5)}>Previous</Btn>
            <Btn css={{ visibility: 'hidden' }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Lang
