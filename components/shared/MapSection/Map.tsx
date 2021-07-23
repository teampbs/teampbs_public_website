import { FC } from 'react'
import { ComposableMap } from 'react-simple-maps'

import json from 'components/shared/MapSection/usa_provinces.json'
import Country from 'components/shared/MapSection/Country'

const geoUrl_usa = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'
const geoUrl_canada = json

const Map: FC<{ jobs_mode: boolean }> = ({ jobs_mode }) => (
  <ComposableMap
    projection='geoAlbers'
    projectionConfig={{ scale: 500 }}
    style={{
      width: '100vw',
      height: '130vh',
      marginBottom: '-350px',
    }}
  >
    {[geoUrl_usa, geoUrl_canada].map((g, index) => (
      <Country
        key={index}
        jobs_mode={jobs_mode}
        geoUrl={g}
      />
    ))}
  </ComposableMap>
)
export default Map
