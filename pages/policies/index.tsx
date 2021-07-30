import Layout from 'components/Layout/Layout'
import HIPAA from 'components/Policies/HIPAA'
import PaymentPolicy from 'components/Policies/PaymentPolicy'
import PrivacyPolicy from 'components/Policies/PrivacyPolicy'
import RefundPolicy from 'components/Policies/RefundPolicy'
import TermsOfUse from 'components/Policies/TermsOfUse'
import Flexbox from 'components/shared/Flexbox'
import ServiceSection from 'components/shared/ServiceSection'
import { useState } from 'react'
import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

const text = {
  title: '',
  subtitle: '',
  description: '',
}

const metaDesc = {
  name: 'description',
  content:
    'Read our Payment Policy, Privacy Policy, HIPAA Notice of Privacy Practices and Terms of Use before using the PBS Corporation website.',
}

const style = {
  tab: {
    container: {
      overflow: 'hidden',
      width: '30%',
      '& .active': {
        background: '#FFF',
      },
    },
    button: {
      background: 'inherit',
      outline: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s',
      marginBottom: 25,
      fontWeight: 700,
      color: colors.textGray,
    },
    span: {
      ':hover': {
        color: colors.black10,
      },
    },
    active: {
      color: colors.black10,
    }
  },
  title: { fontSize: '40px', marginBottom: 30, color: colors.black00 },
}

const tabs = [
  'Payment policy',
  'Refund policy',
  'Terms of use',
  'Privacy policy',
  'HIPAA Notice of privacy practices',
]

const Policies = () => {
  const [active, setActive] = useState(0)

  return (
    <Layout
      bg={colors.blueMild}
      black
      title='Policies | PBS Corporation'
      meta={metaDesc}
      text={text}
      height='0'
    >
      <Flexbox background={colors.blueMild} height='100%' padding='0 0 180px 0'>
        <Flexbox
          col
          width='70%'
          height='100%'
          padding='35px 70px'
          css={mq({ width: ['100%', '100%', '70%', '70%'], margin: ['0 1rem', '0 1rem', '0', '0'], boxSizing: 'border-box' })}
          background={colors.white}
        >
          <h2 css={style.title}>Policies</h2>
          <Flexbox css={mq({ flexDirection: ['column', 'column', 'row', 'row'], alignItems: ['center', 'center', 'flex-start', 'flex-start'] })} items=''>
            <ul css={style.tab.container}>
              {tabs.map((tab, index) => (
                <li
                  key={tab}
                  id={''+index}
                  className={active === index && 'active'}
                  css={style.tab.button}
                  onClick={() => setActive(index)}
                >
                  <a css={active === index && style.tab.active}>
                    <span css={style.tab.span}>{tab}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Flexbox col width='70%' justify='' items='' css={mq({ textAlign: ['justify', 'justify', 'left', 'left'] })}>
              {active === 0 && <PaymentPolicy />}
              {active === 1 && <RefundPolicy />}
              {active === 2 && <TermsOfUse />}
              {active === 3 && <PrivacyPolicy />}
              {active === 4 && <HIPAA />}
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
      <ServiceSection />
    </Layout>
  )
}

export default Policies
