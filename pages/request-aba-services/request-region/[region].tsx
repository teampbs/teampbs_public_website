import Layout from 'components/Layout/Layout'
import Form from 'components/shared/Form/Form'
import ClientInfo from 'components/RequestAbaServices/ClientInfo'
import ParentInfo from 'components/RequestAbaServices/ParentInfo'
import Table from 'components/SelectYourRegion/Card/Table/Table'
import Flexbox from 'components/shared/Flexbox'
import { Text, style, Info } from 'components/SelectYourRegion/styles'
import Payment from 'components/RequestAbaServices/Payment'
import Diagnosis from 'components/RequestAbaServices/Diagnosis'
import Lang from 'components/RequestAbaServices/Lang'
import useWindowDimensions from '@hooks/useWindowsDimensions'

const image = {
  src: '/images/pages/RequestAbaServices/req_services_banner.png',
  alt: 'eligibility banner',
}

const text = {
  title: 'Request Team PBS Services',
  description:
    'Please complete the fields below and we will be in touch within two business days.',
}

const metaDesc = {
  name: 'description',
  content:
    'Need our help? Select your region and get in touch with an ABA provider near you. Take advantage of an interactive map on our website!',
}

const wrapper = {
  paddingRight: 100,
  width: '100%',
}

const URL = 'http://localhost:3000/api/application'

const RequestAbaServices = () => {
  const { width } = useWindowDimensions()

  return (
    <Layout
      title='Request Team PBS Services | PBS Corporation'
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <Form url={URL}>
        <ClientInfo />
        <ParentInfo />
        <div css={[style.card_wrapper, {flexDirection: 'column'}, width < 900 && { top: 50, borderRadius: 5 }]}>
          {width < 900 && (
            <div css={{ display: 'flex' }}>
              <div css={[style.circle, { left: 20 }]}>3</div>
              <Info css={{ width: '100%', margin: '0 0 3rem 4rem', gap: 0 }}>
                <h3 css={[style.heading, {padding: 0}]}>Parent/Guardian Information</h3>
                <Text>Parent details</Text>
              </Info>
            </div>
          )}
          {width > 900 && (
            <>
              <div css={style.circle}>3</div>
              <Info css={{ width: '8rem' }}>
                <h3 css={style.heading}>Parent/Guardian Information</h3>
                <Text>Parent details</Text>
              </Info>
            </>
          )}
          <div css={[wrapper, { padding: 0 }]}>
            <Flexbox items='' gap='0.5rem'>
              <Table request />
            </Flexbox>
          </div>
        </div>
        <Payment />
        <Diagnosis />
        <Lang />
      </Form>
    </Layout>
  )
}

export default RequestAbaServices
