import { Interpolation, Theme } from '@emotion/react'
import React from 'react'

import Flexbox from 'components/shared/Flexbox'
import { usa_provinces } from 'components/shared/MapSection/constants'
import { style, Text } from 'components/shared/MapSection/styles'

const Sidebar = ({ jobs_mode }) => (
  <div css={style.sidebar.container as Interpolation<Theme>}>
    <Text size='13px' css={{ marginLeft: '30px' }}>
      United States:
    </Text>
    {React.Children.toArray(
      usa_provinces.map((name) => (
        <Flexbox height='46px' justify='' gap='1rem'>
          {/* {jobs_mode || (
            <img
              css={style.sidebar.img}
              src='/images/pages/Index/breadcrumb-arrow.png'
              alt='arrow_down'
            />
          )} */}
          <Text css={[style.sidebar.name, jobs_mode || style.sidebar.arrow]} size='20px'>
            {name}
          </Text>
        </Flexbox>
      ))
    )}
  </div>
)

export default Sidebar
