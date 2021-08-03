
import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import Flexbox from 'components/shared/Flexbox'
import { style } from 'components/AbaServices/style'

const cards = [
  { title: 'Assessment', li_1: 'Work collaboratively with stakeholders to identify goals and the individuals’ behaviors of concern', li_2: 'Complete record reviews and interviews with caregivers', li_3: 'Conduct observations across activities and settings' },
  { title: 'Plan Design', li_1: 'Identify patterns surrounding behavior (ABCs)', li_2: 'Develop interventions to prevent problems, teach skills, and respond effectively', li_3: 'Create a comprehensive written behavior support plan' },
  { title: 'Intervention', li_1: 'Empower stakeholders through evidence-based training strategies', li_2: 'Implement a tiered-model of service-delivery to ensure success in carrying out intervention protocols', li_3: 'Gradually fading assistance as ultimate outcomes are achieved' },
  { title: 'Evaluation', li_1: 'Ongoing monitoring of progress towards reduction in challenging behavior, skill acquisition, generalization of skills, and overall quality of life outcomes', li_2: 'Monitor and report on progress, adjusting strategies as needed', li_3: 'Graduate from services when goals are achieved' },
]

const Process: FC<{ expand: boolean }> = ({ expand }) => (
  <div hidden={expand}>
    <Flexbox css={style.process.wrapper} col>
      <h3 css={style.process.title}>
        Overview of our Process
      </h3>
      <Flexbox css={style.process.cardsBox} items='flex-start'>
        {cards.map((card, index) => (
          <Flexbox key={index} col css={style.process.card as Interpolation<Theme>}>
            <h3 css={style.process.card_title}>{card.title}</h3>
            <ul css={index !== cards.length - 1 ? {...style.process.list, ...style.process.list_arrow} : style.process.list}>
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
