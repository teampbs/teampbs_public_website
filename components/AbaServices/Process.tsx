/** @jsxImportSource @emotion/react */
import { FC } from 'react'

import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'

const cards = [
  { title: 'Assessment', li_1: 'Work collaboratively with stakeholders to identify goals and the individuals’ behaviors of concern', li_2: 'Complete record reviews and interviews with caregivers', li_3: 'Conduct observations across activities and settings' },
  { title: 'Plan Design', li_1: 'Identify patterns surrounding behavior (ABCs)', li_2: 'Develop interventions to prevent problems, teach skills, and respond effectively', li_3: 'Create a comprehensive written behavior support plan' },
  { title: 'Intervention', li_1: 'Empower stakeholders through evidence-based training strategies', li_2: 'Implement a tiered-model of service-delivery to ensure success in carrying out intervention protocols', li_3: 'Gradually fading assistance as ultimate outcomes are achieved' },
  { title: 'Evaluation', li_1: 'Ongoing monitoring of progress towards reduction in challenging behavior, skill acquisition, generalization of skills, and overall quality of life outcomes', li_2: 'Monitor and report on progress, adjusting strategies as needed', li_3: 'Graduate from services when goals are achieved' },
]

const Process: FC<{ expand: boolean }> = ({ expand }) => (
  <div hidden={expand}>
    <Flexbox margin='5rem 0 0 0' col padding='3rem 0' background={colors.blueMild}>
      <h3 css={{ fontSize: '30px', padding: '0 0 48px 0' }}>
        Overview of our Process
      </h3>
      <Flexbox padding='0 3rem 3rem' gap='.5rem' items='flex-start'>
        {cards.map((card, index) => (
          <Flexbox col background={colors.white} padding='48px 45px 0 35px' css={{ height: 460, boxShadow: '0px 7px 12px rgb(100 100 100 / 7%)' }}>
            <h3 css={{ fontSize: '26px', padding: '0 0 48px 0' }}>{card.title}
              <div hidden={index === cards.length - 1} css={{ position: 'relative', top: 0, right: 0, width: '100%' }}>
                <img
                  css={{ position: 'absolute', right: -85, bottom: -160 }}
                  src='/images/pages/AbaServices/process_arrow.png'
                  alt='process arrow'
                />
              </div>
            </h3>
            <ul css={{ height: 460, '& > li': { fontSize: '15px', lineHeight: '20px', color: '#242c37', margin: '0 0 17px' } }}>
              <li>{card.li_1}</li>
              <li>{card.li_2}</li>
              <li>{card.li_3}</li>
            </ul>
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  </div>
)

export default Process
