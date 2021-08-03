import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'

const counties = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json'

const MapCounties = () => (
  <ComposableMap
    projection='geoAlbersUsa'
    projectionConfig={{ scale: 1000 }}
    style={{
      width: '100%',
      height: '100%',
    }}
  >
    <ZoomableGroup zoom={1}>
      <Geographies geography={counties}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke='#FFF'
                geography={geo}
                fill='#DDD'
              />
            ))}
          </>
        )}
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
)

export default MapCounties
