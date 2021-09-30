import Link from 'next/link'

import Button from 'components/shared/Button'
import { styles } from 'components/shared/styles'

const ServiceSection = () => (
  <div css={styles.service.wrapper}>
    <h3 css={styles.service.title}>Interested in our services?</h3>
    <p css={styles.service.text}>
      Check your eligibility and submit service request form to start the
      approval procedure.
    </p>
    <Button icon>
      <Link href='/request-aba-services'>
        <a css={styles.service.link}>Request ABA Services</a>
      </Link>
    </Button>
  </div>
)

export default ServiceSection
