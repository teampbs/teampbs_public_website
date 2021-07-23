import Link from 'next/link'

import Button from 'components/shared/Button'
import { Service } from 'components/shared/styles'

const ServiceSection = () => (
  <Service>
    <h3 className='text-4xl py-2 font-bold'>Interested in our services?</h3>
    <p className='py-10'>
      Check your eligibility and submit service request form to start the
      approval procedure.
    </p>
    <Button icon>
      <Link href='/request-aba-services'>
        <a className='mr-5'>Request ABA Services</a>
      </Link>
    </Button>
  </Service>
)

export default ServiceSection
