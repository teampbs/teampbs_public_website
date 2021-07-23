import React, { FC } from 'react'
import { useRouter } from 'next/router'

import Layout from 'components/Layout/Layout'
import Card from 'components/SelectYourRegion/Card/Card'
import { colors } from 'utils/constants'
import { Box } from 'components/SelectYourRegion/styles'

const cards = [
  {
    num: 1,
    title: 'Applicant Information',
    subtitle:
      'Please enter your legal name, D.O.B, and address as it appears on a government-issued ID',
  },
  {
    num: 2,
    title: 'Your Availability',
    subtitle: 'What days and times would work best for you?',
    isTable: true,
  },
  {
    num: 3,
    title: 'Language, Citizenship, Legal and Degree',
    subtitle: '',
  },
  {
    num: 4,
    title: 'Education',
    subtitle: 'Add your education details',
    require: true,
  },
  {
    num: 5,
    title: 'References',
    subtitle: 'Add references',
    require: true,
  },
  {
    num: 6,
    title: 'Previous Employment',
    subtitle: 'Add your previous employment details',
    require: true,
  },
  { num: 7, title: 'Resume', subtitle: 'Upload your resume' },
  { num: 8, title: 'Other Information', subtitle: '' },
  {
    num: 9,
    title: 'Applicant Acknowledgment And Authorization',
    subtitle: 'Please Read Carefully',
  },
]

const metaDesc = {
  name: 'description',
  content: `Looking for a job opportunity? PBS Corporation has open positions across the continent! Join our team to work in a supportive environment!`,
}

const Region: FC = () => {
  const router = useRouter()
  const { id } = router.query  

  const text = {
    //@ts-ignore
    title: `Join Our Team in ${id?.charAt(0).toUpperCase() + id?.slice(1)}`,
    subtitle: 'Team PBS Service Provider Application',
    description: `Positive Behavior Supports Corporation (”PBS”) is an equal opportunity employer and does not discriminate on the basis of race, color, religion, sex, pregnancy, sexual orientation, national origin, age, disability, genetic information, veteran or other protected status.`,
  }

  return (
    <Layout
      title={`Join Our Team in ${id} | PBS Corporation`}
      black
      moreInfo
      bg={colors.blueMild}
      meta={metaDesc}
      video
      text={text}
      height='600px'
    >
      <Box>
        {React.Children.toArray(cards.map((props) => <Card {...props} />))}
        <Card num={0} title='Captcha | verify to prevent spam' submit />
      </Box>
    </Layout>
  )
}

export default Region
