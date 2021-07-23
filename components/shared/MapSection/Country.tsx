import { FC } from 'react'
import { geoCentroid } from 'd3-geo'
import { Geographies, Marker, Annotation } from 'react-simple-maps'

import {
  canada_provinces,
  ICountry,
  offsets,
  provinces,
} from 'components/shared/MapSection/constants'
import Shape from 'components/shared/MapSection/Shape'

const Country: FC<ICountry> = ({ jobs_mode, geoUrl }) => (
  <Geographies geography={geoUrl}>
    {({ geographies }) => (
      <>
        {geographies.map((geo) => {
          geo.properties.name ??
            canada_provinces.map((p, index) =>
              index == geo.id ? (geo.properties.name = p) : geo.properties.name
            )

          return <Shape key={geo.id} geo={geo} jobs_mode={jobs_mode} />
        })}
        {geographies.map((geo) => {
          const centroid = geoCentroid(geo)
          const cur = provinces.find((s) => s.val === geo.id)

          return (
            <g key={geo.rsmKey + '-name'}>
              {cur &&
                centroid[0] > -160 &&
                centroid[0] < -67 &&
                (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                  <Marker coordinates={centroid}>
                    <text
                      y='2'
                      fontWeight={700}
                      fontSize={14}
                      textAnchor='middle'
                    >
                      {cur.id}
                    </text>
                  </Marker>
                ) : (
                  //@ts-ignore
                  <Annotation
                    subject={centroid}
                    dx={offsets[cur.id][0]}
                    dy={offsets[cur.id][1]}
                  >
                    <text x={4} fontSize={14} alignmentBaseline='middle'>
                      <tspan>{cur.id}</tspan>
                    </text>
                  </Annotation>
                ))}
            </g>
          )
        })}
      </>
    )}
  </Geographies>
)

export default Country
