import styled from '@emotion/styled'

import { Expand } from 'components/Careers/Expand'
import { QuoteSlider } from 'components/Careers/Slider'
import { colors } from 'utils/constants'
import Journeys from './Journeys'

const Article = styled.section({
  maxWidth: 650,
})

const Section = styled.section({
  background: colors.blueMild,
})

export const JobsSection = () => (
  <Section className='flex justify-center bg-dark-blue m-auto p-20 w-full'>
    <Article className='mr-10'>
      <h3 className='font-bold text-4xl pb-10'>Open positions</h3>
      <div className='flex pr-4 mb-8'>
        <img
          src='/images/pages/careers/open-positions-icon.png'
          alt='people'
          className='pr-3'
        />
        <p>
          PBS is an equal opportunity workplace. Employment selection and
          related decisions are made without regard to sex, race, age,
          disability, religion, national origin, color or any other protected
          class.
        </p>
      </div>
      <Expand title='Behavior Assistant' />
      <Expand title='Registered Behavior Technician' />
      <Expand title='Behavior Analyst' />
    </Article>
    <Article>
      <div className='py-3'>
        <h3 className='text-3xl font-bold pb-10'>Why Team PBS?</h3>
        <p className='pb-16'>
          Why Team PBS? We are different. Our vision is focused both on the
          families we serve, and the team members we develop. We are outcome
          driven and provide a multi-level tier of clinical support. We are not
          just looking for behavior analysts and technicians. We are searching
          for the best, who are looking to make lasting change in families
          lives. If you want to work with a team who supports you, offers you
          professions development and growth, and directs focus on our families
          first, PBS is the team for you!
        </p>
      </div>
      <QuoteSlider />
      <Journeys />
    </Article>
  </Section>
)
