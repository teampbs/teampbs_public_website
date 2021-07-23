/** @jsxImportSource @emotion/react */
import React, { FC } from 'react'

import MapChart from 'components/shared/MapSection/Map'
import { usa_provinces } from 'components/shared/MapSection/constants'
import { Container, Heading, Text, Row, RowMq, Countries, SideBarItem, Arrow, BlueSpan } from 'components/shared/MapSection/styles'

const MapSection: FC<{ jobs_mode?: boolean }> = ({ jobs_mode }) => (
  <Container>
    <Heading>
      Find a Regional Coordinator in your area:
    </Heading>
    <Text mt>
      Please click on the area you reside to obtain more information on your
      local team PBS team member(s).
    </Text>
    <Row css={RowMq}>
      <Countries>
        <Text>United States:</Text>
        {React.Children.toArray(usa_provinces.map((name) => (
          <SideBarItem>
            {jobs_mode || <Arrow
              src='/images/pages/Index/breadcrumb-arrow.png'
              alt='arrow_down'
            />}
            <Text>{name}</Text>
          </SideBarItem>
        )))}
      </Countries>
      <MapChart jobs_mode={jobs_mode} />
    </Row>
    <Text size='0.75rem'>
      Have a question for team PBS?{' '}
      <BlueSpan>Get in touch</BlueSpan>
    </Text>
  </Container>
)

export default MapSection
