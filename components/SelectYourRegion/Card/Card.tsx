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

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const Card: FC<ICard> = ({
  num,
  isTable,
  title,
  subtitle,
  require,
  submit,
}) => {
  const [, setCaptcha] = useState('')

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
      ]}
    >
      {num !== 0 && <div css={style.circle}>{num}</div>}
      <Info
        css={title === 'Captcha' && style.recaptchaWrapper}
        small={!require && title !== 'Resume'}
      >
        {require && (
          <Text red className='text-red-500'>
            Skip this section by uploading a resume
          </Text>
        )}
        <h3 css={style.heading}>{title}</h3>
        <Text>{subtitle}</Text>
      </Info>
      <div css={[wrapper, num === 2 ? { padding: 0 } : {}]}>
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
            <Button type='submit' children='submit' />
          </>
        )}
      </div>
    </div>
  )
}

Card.defaultProps = {
  isTable: false,
}

export default Card
