import { FC, useState } from 'react'

import { Text, style, Info } from 'components/SelectYourRegion/styles'
import { ICard } from 'interfaces'
import Button from 'components/shared/Button'
import Table from 'components/SelectYourRegion/Card/Table/Table'
import ApplicantInfo from 'components/SelectYourRegion/Card/ApplicationInfo/ApplicantInfo'
import Education from 'components/SelectYourRegion/Card/Education/Education'
import References from 'components/SelectYourRegion/Card/References/References'
import Employment from 'components/SelectYourRegion/Card/Employment/Employment'
import Resume from 'components/SelectYourRegion/Card/Resume/Resume'
import LawInfo from 'components/SelectYourRegion/Card/LawInfo/LawInfo'
import OtherInfo from 'components/SelectYourRegion/Card/OtherInfo/OtherInfo'
import Authorization from 'components/SelectYourRegion/Card/Authorization/Authorization'
import CustomRecaptcha from 'components/shared/Recaptcha/Recaptcha'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { Btn, stepControls } from 'components/shared/styles'
import { Interpolation, Theme } from '@emotion/react'
import { mq } from 'styles/styles'

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const wrapperMobile = {
  paddingRight: 0,
  width: '100%',
}

const infoCss = mq({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
}) as Interpolation<Theme>

const infoCssMobile = mq({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  width: '80%',
  margin: '0 0 3rem 3.5rem',
  '& h3': {
    fontSize: '20px',
    padding: 0,
  },
}) as Interpolation<Theme>

const Card: FC<ICard> = ({
  num,
  isTable,
  title,
  subtitle,
  require,
  submit,
  setStep,
}) => {
  const [, setCaptcha] = useState('')
  const { width } = useWindowDimensions()

  const recaptchaLoaded = () => {
    console.log('reCAPTCHA loaded')
  }

  const verifyCallback = (response) => {
    setCaptcha(response ?? '')
  }

  return (
    <div
      css={[
        style.card_wrapper,
        { marginBottom: 0 },
        isTable && { flexDirection: 'column' },
        width < 900 && { flexDirection: 'column', top: 50, borderRadius: 5 },
      ]}
    >
      {num !== 0 && (
        <div css={[style.circle, width < 900 && { left: 20 }]}>{num}</div>
      )}
      <Info
        css={[
          width < 900 ? infoCssMobile : infoCss,
          title === 'Captcha' && style.recaptchaWrapper,
        ]}
        small={!require && title !== 'Resume'}
      >
        {require && (
          <Text red className='text-red-500'>
            Skip this section by uploading a resume
          </Text>
        )}
        <h3 css={style.heading}>{title}</h3>
        <Text css={width < 900 && { fontSize: '14px' }}>{subtitle}</Text>
      </Info>
      <div
        css={[
          width < 900 ? wrapperMobile : wrapper,
          num === 2 ? { padding: 0 } : {},
        ]}
      >
        {num === 1 ? <ApplicantInfo /> : null}
        {num === 2 ? <Table /> : null}
        {num === 3 ? <LawInfo /> : null}
        {num === 4 ? <Education /> : null}
        {num === 5 ? <References /> : null}
        {num === 6 ? <Employment /> : null}
        {num === 7 ? <Resume /> : null}
        {num === 8 ? <OtherInfo /> : null}
        {num === 9 ? <Authorization /> : null}
        {submit && (
          <>
            <CustomRecaptcha
              verifyCallback={verifyCallback}
              onloadCallback={recaptchaLoaded}
            />
            <Button
              width={width < 600 ? '100%' : '15rem'}
              type='submit'
              children='submit'
            />
          </>
        )}
        {!submit && width < 900 && (
          <div css={stepControls}>
            <Btn
              css={num === 1 && { visibility: 'hidden' }}
              inverse
              onClick={() => setStep(num - 1)}
            >
              Previous
            </Btn>
            <Btn
              css={num === 9 && { visibility: 'hidden' }}
              onClick={() => setStep(num + 1)}
            >
              Next
            </Btn>
          </div>
        )}
      </div>
    </div>
  )
}

Card.defaultProps = {
  isTable: false,
}

export default Card
