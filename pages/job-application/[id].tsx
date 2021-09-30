import React, { FC } from 'react'
import { useRouter } from 'next/router'

import Layout from 'components/Layout/Layout'
import Card from 'components/SelectYourRegion/Card/Card'
import { colors } from 'utils/constants'
import { cards } from 'utils/mock/cards'
import Form from 'components/shared/Form/Form'

const metaDesc = {
  name: 'description',
  content: `Looking for a job opportunity? PBS Corporation has open positions across the continent! Join our team to work in a supportive environment!`,
}

// interface formData {
//   // applicant information
//   firstName: string
//   MI?: string
//   lastName: string
//   certificate?: string
//   analyst_type?: string
//   date_birth: Date
//   date_app: Date | string
//   street: string
//   unit?: string
//   email: string
//   phone: number
//   skills: string
// }

const URL = 'http://localhost:3000/api/application'
const capitalize = (name: string) => name?.charAt(0).toUpperCase() + name?.slice(1)

const Region: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const text = {
    title: `Join Our Team in ${capitalize(''+id)}`,
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
      <Form url={URL}>
        {React.Children.toArray(cards.map((props) => <Card {...props} />))}
      </Form>
    </Layout>
  )
}

export default Region
