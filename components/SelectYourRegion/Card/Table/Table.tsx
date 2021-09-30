import { FC, useState } from 'react'

import { style } from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { appointments, week_days } from 'components/SelectYourRegion/mocks'
import ToggleCell from 'components/SelectYourRegion/Card/Table/ToggleCell'
import TableJobHeader from 'components/SelectYourRegion/Card/Table/TableJobHeader'
import TableRequestHeader from 'components/SelectYourRegion/Card/Table/TableRequestHeader'
import TableRequestFooter from 'components/SelectYourRegion/Card/Table/TableRequestFooter'
import TableJobFooter from 'components/SelectYourRegion/Card/Table/TableJobFooter'
import { mq } from 'styles/styles'
import { colors } from 'utils/constants'

const tableCss = mq({
  '& *': {
    '::-webkit-scrollbar': {
      height: 2,
      width: 2,
    },
    '::-webkit-scrollbar-track': {
      background: colors.gray,
    },
    '::-webkit-scrollbar-thumb ': {
      background: 'rgba(36,44,55,0.1)',
    },
  },
  width: ['100%', '100%', '100%', '100%'],
})

const nonBusinessDays = ['saturday', 'sunday']

const Table: FC<{ request?: boolean }> = ({ request }) => {
  const [saturday, setSaturday] = useState(false)
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [markAll, setMarkAll] = useState(false)

  const handleButton = (bool: boolean) => setMarkAll(bool)

  const getToggleCell = (day, isActive) => (
    <ToggleCell isMarkAll={markAll} day={day} isDayMarked={isActive} />
  )

  const handleCheckbox = (day) =>
    ({
      saturday: () => setSaturday((prev) => !prev),
      sunday: () => setSunday((prev) => !prev),
      monday: () => setMonday((prev) => !prev),
      tuesday: () => setTuesday((prev) => !prev),
      wednesday: () => setWednesday((prev) => !prev),
      thursday: () => setThursday((prev) => !prev),
      friday: () => setFriday((prev) => !prev),
    }[day] || null)

  return (
    <Flexbox col padding='2.5rem 0 0 0'>
      {request ? (
        <TableRequestHeader handleButton={handleButton} />
      ) : (
        <TableJobHeader handleCheckbox={handleCheckbox} />
      )}
      <table css={tableCss}>
        <thead>
          <tr
            css={[
              style.table.row,
              {
                overflowX: 'auto',
                border: '1px solid #ddd',
              },
            ]}
          >
            {week_days.map((day, index) => (
              <td
                key={index}
                css={[
                  style.table.cell,
                  style.table.cellHeader,
                  day === 'Times'
                    ? { minWidth: '120px' }
                    : { minWidth: 'calc(100% / 7)' },
                ]}
                onClick={handleCheckbox(day.toLowerCase())}
              >
                <span css={style.centering}>{day}</span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody css={style.table.tbody}>
          {appointments.map((item, index) => (
            <tr key={index} css={style.table.row} id={item}>
              <td css={[style.table.cell, { minWidth: '120px' }]}>{item}</td>
              {getToggleCell(nonBusinessDays[1], sunday)}
              {getToggleCell(week_days[2].toLowerCase(), monday)}
              {getToggleCell(week_days[3].toLowerCase(), tuesday)}
              {getToggleCell(week_days[4].toLowerCase(), wednesday)}
              {getToggleCell(week_days[5].toLowerCase(), thursday)}
              {getToggleCell(week_days[6].toLowerCase(), friday)}
              {getToggleCell(week_days[0].toLowerCase(), saturday)}
            </tr>
          ))}
        </tbody>
        {request ? (
          <TableRequestFooter />
        ) : (
          <TableJobFooter handleButton={handleButton} />
        )}
      </table>
    </Flexbox>
  )
}

Table.defaultProps = {
  request: false,
}

export default Table
