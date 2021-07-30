import { useState } from 'react'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import ServiceSection from 'components/shared/ServiceSection'
import { colors } from 'utils/constants'
import { mq } from 'styles/styles'

const image = {
  src: '/images/pages/ResourceCenter/banner.png',
  alt: 'resources banner',
}

const text = {
  title: 'Resources',
  description: 'Learn more about PBS and ABA',
}

const metaDesc = {
  name: 'description',
  content:
    'Need more information on applied behavior analysis? We enlisted valuable resources on our websites for anyone to read for free. Visit our website!',
}

const style = {
  link: {
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
    background: colors.white,
    padding: '.5rem 2rem',
    marginBottom: '.5rem',
    boxShadow: '0px 3px 7px rgb(48 74 90 / 5%)',
    width: '100%',
    gap: '2rem',
    color: colors.black10,
    borderRadius: '5px',
  },
  tab: {
    container: {
      overflow: 'hidden',
      width: '80%',
      background: colors.blueMild,
      '& .active': {
        borderLeft: `3px solid ${colors.lightBlue}`,
        background: '#FFF',
      },
    },
    button: {
      background: 'inherit',
      outline: 'none',
      cursor: 'pointer',
      padding: '14px 16px',
      transition: '0.3s',
      borderRadius: '5px',
      fontWeight: 700,
      ':hover': {
        borderLeft: `3px solid ${colors.lightBlue}`,
        background: '#FFF',
      },
    },
    tabContent: {
      display: 'none',
      padding: '6px 12px',
      border: '1px solid #ccc',
      borderTop: 'none',
    },
  },
}

const tabContent = [
  {
    id: 0,
    list: [
      'Avoiding Power Struggles',
      'Dealing Effectively with Difficult Situations',
      'Engaging Cooperation through Choice and Preference',
      'Establishing a Positive Family Structure',
    ],
  },
  {
    id: 1,
    list: [
      'Journal of Positive Behavior Interventions (Professional Resource)',
      'Home and Community Positive Behavior Support NEtwork (Professional and Family Resource)',
      'Association of Applied Behavior Analysis International (Professional Resource)',
    ],
  },
  {
    id: 2,
    list: [
      'Bambara, L., Dunlap, G., & Schwartz, I. (Eds.) (2004). Positive behavior support : Critical articles on improving practice for individuals with severe disabilities. Austin, TX: PRO-ED.',
    ],
  },
  { id: 3, list: ['Presentation 1'] }
]

const HideMobile = mq({
  display: ['none', 'flex', 'flex', 'flex', ],
})

const FlexInnerMq = mq({
  width: ['100%', '50%', '33%', '33%']
})

const FlexMq = mq({
  padding: ['5rem 1rem', '5rem 2rem', '5rem 0', '5rem 0'],
  gap: ['2rem', '0rem', '0rem', '0rem'],
  justifyContent: ['space-between', 'space-between', 'center', 'center']
})

const tabs = ['Articles', 'Websites', 'Books', 'Presentation']

const ResourceCenter = () => {
  const [active, setActive] = useState(0)
  
  const currentList = tabContent.find(i => i.id === active)

  return (
    <Layout
      meta={metaDesc}
      title='Resource | PBS Corporation'
      image={image}
      text={text}
      height='500px'
    >
      <Flexbox css={FlexMq} items='flex-start' background={colors.blueMild} padding='5rem 0' gap='2rem'>
        <Flexbox css={[FlexInnerMq, HideMobile]} col width='33%'>
          <ul css={style.tab.container}>
            {tabs.map(
              (tab, index) => (
                <li
                  key={tab}
                  id={'' + index}
                  className={active === index && 'active'}
                  css={style.tab.button}
                  onClick={() => setActive(index)}
                >
                  <a>
                    <span>{tab}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </Flexbox>
        <Flexbox css={FlexInnerMq} col width='33%'>
          {currentList.list.map((tab, index) => (
            <a
              key={index}           
              css={style.link}
              id={tab.toLowerCase()}
            >
              <img
                src='/images/pages/ResourceCenter/services_icon.png'
                alt='service icon'
                width='20px'
                height='20px'
              />
              {tab}
            </a>
          ))}
        </Flexbox>
      </Flexbox>
      <ServiceSection />
    </Layout>
  )
}

export default ResourceCenter
