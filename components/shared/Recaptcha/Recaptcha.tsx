import Recaptcha from 'react-recaptcha'
import { styles } from 'components/shared/styles'

const CustomRecaptcha = ({ verifyCallback, onloadCallback }) => (
  <div css={styles.recaptcha}>
    <Recaptcha
      sitekey={process.env.GOOGLE_RECAPTCHA}
      render='explicit'
      verifyCallback={verifyCallback}
      onloadCallback={onloadCallback}
      badge='bottomleft'
    />
  </div>
)

export default CustomRecaptcha