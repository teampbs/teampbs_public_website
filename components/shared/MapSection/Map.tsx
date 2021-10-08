import { FC } from 'react'
import { ComposableMap } from 'react-simple-maps'

import canada_json from 'components/shared/MapSection/usa_provinces.json'
import usa_json from 'components/shared/MapSection/usa_geojson.json'
import Country from 'components/shared/MapSection/Country'

const Map: FC<{ jobs_mode?: boolean, request_form?: boolean }> = ({ jobs_mode, request_form }) => {

  return (
    <ComposableMap
      projection='geoAlbers'
      data-tip=""
      projectionConfig={{ scale: 500 }}
      style={{
        width: '100vw',
        height: '130vh',
        marginBottom: '-350px',
      }}
    >
      {[usa_json, canada_json].map((g, index) => (
        <Country
          key={index}
          jobs_mode={jobs_mode}
          geoUrl={g}
          request_form={request_form}
        />
      ))}
    </ComposableMap>
  )
}

export default Map
