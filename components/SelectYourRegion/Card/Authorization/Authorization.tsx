import { FC } from 'react'

import Flexbox from 'components/shared/Flexbox'
import SignatureBox from 'components/SelectYourRegion/Card/Authorization/SignatureBox'
import { style } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const Authorization: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <Flexbox col gap='0.5rem'>
      <div css={style.authorization.innerWrap}>
        {width > 900 && <div css={style.authorization.limiter} />}
        <div css={style.authorization.textWrap}>
          <p>
            I understand that Positive Behavior Supports Corporation (“PBS”) will
            attempt to verify statements made on my application and made during my
            employment interview and I give permission for my former employers to
            answer any and all questions based upon information available to them.
          </p>
          <p>
            I understand that false, incomplete or misleading statements or
            omissions on this application or any other employment form, whether
            pre- or post-employment, may be considered sufficient cause for
            dismissal, if and when discovered. For these purposes, all materials
            that I submit to PBS are considered employment forms. I understand
            that the use of this application does not indicate there are positions
            open and does not in any way obligate PBS.
          </p>
          <p>In addition, I understand that:</p>
          <ul css={style.authorization.list}>
            <li css={style.authorization.listItem}>
              I may be required to submit to drug testing or medical evaluations
              now or, if hired, at any time in the future and I agree to such
              testing. My failure or refusal to undergo such testing will result
              in the withdrawal of my application or my separation.
            </li>
            <li css={style.authorization.listItem}>
              I am giving permission to PBS Corp. to conduct a background check.
            </li>
            <li css={style.authorization.listItem}>
              The Immigration Reform Act of 1986 requires that, after employment,
              employers verify the legal work authorization and identity of all
              new employees. An offer of employment will depend upon PBS’s ability
              to verify my employment eligibility.
            </li>
            <li css={style.authorization.listItem}>
              By signing below I am waiving certain rights regarding this
              application process or if employed: my right to a jury trial to
              resolve any lawsuit arising out of this process or if employed; and,
              my right to participate as a member or representative of a class of
              similarly situated individuals in any class or collective action
              lawsuit arising out of this process or if employed.
            </li>
            <li css={style.authorization.listItem}>
              I understand that my failure to sign this form will be considered a
              withdrawal of my application for employment.
            </li>
          </ul>
          <SignatureBox />
          <div css={style.authorization.disclaimer}>
            <p>
              Due to the volume of applications received, we may not interview
              every applicant. In the event you are selected for an interview, we
              will contact you.
            </p>
            <p>
              Applications will not be considered active after 90 days from the
              date of this application. Employment with this Company is at will.
            </p>
          </div>
        </div>
      </div>
    </Flexbox>
  )
}


export default Authorization
