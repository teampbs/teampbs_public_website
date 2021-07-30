import { FC } from 'react'
import { Geography } from 'react-simple-maps'
import Link from 'next/link'

import { colors } from 'utils/constants'
import { marked } from 'components/shared/MapSection/constants'
import ReactTooltip from 'react-tooltip'

const style_link_graph = {
  default: {
    fill: 'rgb(168, 217, 249)',
    outline: 'none',
  },
  hover: {
    fill: colors.lightBlue,
    outline: '#DDD',
    stroke: '#ccc',
    strokeWidth: 2,
  },
  pressed: {
    fill: colors.lightBlue,
    outline: 'none',
  },
}

const style_jobs_mode = {
  default: {
    fill: '#FFF',
    outline: 'none',
  },
  hover: {
    fill: '#FFF',
    outline: '#DDD',
    stroke: '#ccc',
    strokeWidth: 2,
  },
  pressed: {
    fill: '#FFF',
    outline: 'none',
  },
}

const style_default = {
  default: {
    fill: '#fff',
    outline: 'none',
  },
  pressed: {
    outline: 'none',
  },
}

const Shape: FC<{ geo: any; jobs_mode: boolean; request_form?: boolean }> = ({
  geo,
  jobs_mode,
  request_form,
}) => {
  const { name } = geo.properties

  return (
    <>
      {jobs_mode ? (
        <Link
          href={
            jobs_mode
              ? request_form
                ? `/request-aba-services/request-region/${name.toLowerCase()}`
                : `job-application/${name.toLowerCase()}`
              : `/contact/region/${name}`
          }
        >
          <a
            css={{
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <Geography
              data-for='country_name'
              data-tip={name}
              data-iscapture="true"
              key={geo.rsmKey}
              stroke={colors.blueMild}
              geography={geo}
              fill='#FFF'
              style={marked.includes(name) ? style_link_graph : style_jobs_mode}
            />
            <ReactTooltip
              id='country_name'
              place='top'
              type='light'
              effect='float'
              multiline={true}
            />
          </a>
        </Link>
      ) : marked.includes(name) ? (
        <Link
          href={
            jobs_mode ? `job-application/${name}` : `/contact/region/${name}`
          }
        >
          <a
            css={{
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <Geography
              key={geo.rsmKey}
              stroke={colors.blueMild}
              geography={geo}
              fill='#FFF'
              style={style_link_graph}
            />
          </a>
        </Link>
      ) : (
        <Geography
          key={geo.rsmKey}
          stroke={colors.blueMild}
          geography={geo}
          fill='#FFF'
          style={style_default}
        />
      )}
    </>
  )
}

export default Shape
