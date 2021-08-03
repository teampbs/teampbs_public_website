import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import MapChart from 'components/shared/MapSection/Map'
import {
  Text,
  style,
} from 'components/shared/MapSection/styles'
import Sidebar from 'components/shared/MapSection/Sidebar'

const MapSection: FC<{ jobs_mode?: boolean; request_form?: boolean, isContact?: boolean }> = (
  props,
  { jobs_mode, isContact }
) => (
  <div css={style.wrapper as Interpolation<Theme>}>
    <h2 css={style.heading as Interpolation<Theme>}>{isContact ? 'Contact PBS Corporation' : 'Find a Regional Coordinator in your area:'}</h2>
    {isContact && <Text mt>
      We have large number of behavior analysts including doctoral level (BCBA-D), master\'s level (BCBA) and bachelor\'s level (BCaBA). On a limited basis, in some areas, we also offer licensed mental health counselors, speech and language and occupational therapist services.
    </Text>}
    <Text mt>
      Please click on the area you reside to obtain more information on your
      local team PBS team member(s).
    </Text>
    <div css={style.row}>
      <Sidebar jobs_mode={jobs_mode} />
      <MapChart {...props} />
    </div>
    <Text size='15px'>
      Have a question for team PBS?{' '}
      <span
        css={style.link}
      >
        Get in touch
      </span>
    </Text>
  </div>
)

export default MapSection
