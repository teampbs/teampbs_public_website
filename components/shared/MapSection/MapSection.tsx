import { FC } from 'react'
import { Interpolation, Theme } from '@emotion/react'

import MapChart from 'components/shared/MapSection/Map'
import {
  Text,
  style,
} from 'components/shared/MapSection/styles'
import Sidebar from 'components/shared/MapSection/Sidebar'

const MapSection: FC<{ jobs_mode?: boolean; request_form?: boolean }> = (
  props,
  { jobs_mode }
) => (
  <div css={style.wrapper as Interpolation<Theme>}>
    <h2 css={style.heading as Interpolation<Theme>}>Find a Regional Coordinator in your area:</h2>
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
