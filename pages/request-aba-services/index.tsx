import { Interpolation, Theme } from '@emotion/react'
import HowItWorks from 'components/Index/HowItWorks/HowItWorks'
import Layout from 'components/Layout/Layout'
import { style as jobStyle } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { FC } from 'react'
import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

const image = {
  src: '/images/pages/RequestAbaServices/req_services_banner.png',
  alt: 'eligibility banner',
}

const text = {
  title: 'Request ABA Services',
  description:
    'Offering ABA services in 16 states and Canada across over 250 private insurance companies and state-funded policies.',
}

const metaDesc = {
  name: 'description',
  content:
    'Need our help? Select your region and get in touch with an ABA provider near you. Take advantage of an interactive map on our website!',
}

const cards = [
  {
    src: '/images/how_works_icon1_hp.png',
    alt: 'request',
    number: 1,
    title: 'Submit Service Request',
    text: 'We need to collect basic demographic information for the parent/caregiver and individual who will receive the service',
  },
  {
    src: '/images/how_works_icon2_hp.png',
    alt: 'connect',
    number: 2,
    title: 'Get contacted by PBS reps',
    text: 'Our team will respond within two business days of being contacted to provide a status update.',
  },
  {
    src: '/images/how_works_icon3_hp.png',
    alt: 'authorization',
    number: 3,
    title: 'Authorization process begins',
    text: 'Our clinical team will then work to evaluate the referral and obtain an authorization for services based on the individual’s current benefits.',
  },
  {
    src: '/images/how_works_icon4_hp.png',
    alt: 'visit',
    number: 4,
    title: 'Your first visit with Team PBS begin',
    text: 'Our clinical team will then work to evaluate the referral and obtain an authorization for services based on the individual’s current benefits.',
  },
]

const style = {
  card: {
    outer: mq({
      height: '100%',
      background: '#FFF',
      width: ['80%', '80%', '80%', '60%'],
    }),
    wrapper: mq({
      display: 'flex',
      flexDirection: ['column', 'column', 'row', 'row'],
      justifyContent: 'space-between',
      gap: ['1rem', '1rem', '5rem', '5rem'],
      background: '#FFF',
      padding: ['2rem 2rem 0', '2rem 2rem 0', '50px 65px 0', '50px 65px 0'],
      position: 'relative' as 'relative',
      top: -65,
      height: '100%',
      maxHeight: ['750px', '550px', '100%', '100%'],
    }) as Interpolation<Theme>,
    title: { fontSize: '19px', paddingBottom: '28px' },
    list: {
      background: `url('images/pages/RequestAbaServices/list_bullet_icon.png') 10px no-repeat`,
      backgroundPosition: '0px 10px',
      padding: '0 0 48px 40px',
    },
    list_span: { fontWeight: 700 },
    subtext: { fontSize: 16 },
    footer: { fontSize: 15, borderTop: 'solid 1px #f2f7fb' },
    footer_text: { color: 'rgba(36,44,55,0.65)', paddingLeft: 36 },
    infoTitle: {
      fontWeight: 700,
      fontSize: '1.5rem',
      padding: '0 0 0.75rem 0',
    },
  },
}

const Card: FC<{ num: number; title: string }> = ({ num, title, children }) => (
  <Flexbox col css={style.card.outer}>
    <div css={style.card.wrapper}>
      <div css={jobStyle.circle}>{num}</div>
      <div
        css={mq({
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          width: ['100%', '100%', '50%', '50%'],
        })}
      >
        <h3 css={style.card.infoTitle}>{title}</h3>
      </div>
      <div
        css={{
          paddingRight: 100,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {children}
      </div>
    </div>
    {num === 3 && (
      <Flexbox
        css={style.card.footer}
        padding='35px 74px 38px'
        margin='43x 0 0'
      >
        <img
          src='images/pages/RequestAbaServices/privacy_icon.png'
          alt='privacy icon'
        />
        <p css={style.card.footer_text}>
          All confidential information is maintained on a highly secure server
          owned and managed directly by Team PBS. Our website is secured by
          256-bit encryption and our company and domain has been validated by a
          trusted third party.
        </p>
      </Flexbox>
    )}
  </Flexbox>
)

const RequestAbaServices: FC = () => (
  <Layout
    title='Request ABA Services | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <Flexbox padding='0 0 5rem 0' gap='6rem' col background={colors.blueMild}>
      <Card num={1} title='What can ABA therapy do for your loved one?'>
        <Flexbox col>
          <p css={style.card.title}>
            PBS Corp serves children and adults with behavioral challenges.
            Typically, we support individuals who require assistance in:
          </p>
          <ul>
            <li css={style.card.list}>
              <span css={style.card.list_span}>
                developing or enhancing language skills
              </span>
              to more effectively communicate their needs and functional skills
              (e.g., daily living, self-regulation) that will lead to greater
              independence
            </li>
            <li css={style.card.list}>
              <span css={style.card.list_span}>
                diminishing problem behaviors
              </span>
              such as aggression, self-injury, elopement, tantrumming, and
              property destruction that limit their ability to develop skills
              and participate fully in integrated settings
            </li>
          </ul>
        </Flexbox>
      </Card>
      <Card
        num={2}
        title='Does my funding source provide coverage for ABA services?'
      >
        <Flexbox col>
          <p css={style.card.title}>
            Offering ABA services with over 250 private insurance companies and
            state-funded policies as well as grants and scholarships. If your
            funding source does offer ABA services and PBS Corp. is not
            in-network, PBS Corp. can work to gain a single case agreement for
            ABA therapy.
          </p>
        </Flexbox>
      </Card>
      <Card num={3} title='What documents are required?'>
        <Flexbox col>
          <p css={style.card.title}>
            In order to check benefits and obtain authorization, we will need to
            collect the following info / documents:
          </p>
          <ul>
            <li css={style.card.list}>
              <span css={style.card.list_span}>
                basic demographic information
              </span>
              for the parent/caregiver and individual who will receive the
              services.
            </li>
            <li css={style.card.list}>
              In addition, you will have the opportunity to upload
              <span css={style.card.list_span}>
                pictures of your insurance card
              </span>
              (front and back).
            </li>
            <li css={style.card.list}>
              any diagnostic reports verifying a qualifying diagnosis.
            </li>
          </ul>
          <p css={style.card.subtext}>
            Our clinical team will then work to evaluate the referral and obtain
            an authorization for services based on the individual’s current
            benefits. Our team will respond within two business days of being
            contacted to provide a status update.
          </p>
        </Flexbox>
      </Card>
    </Flexbox>
    <Flexbox
      col
      height='100%'
      justify='flex-start'
      background={colors.darkBlue}
      padding='0 3rem 3rem'
      gap='.5rem'
      items='flex-start'
    >
      <HowItWorks list={cards} dark />
    </Flexbox>
  </Layout>
)

export default RequestAbaServices
