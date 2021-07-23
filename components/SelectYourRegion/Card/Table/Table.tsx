import React, { FC } from 'react'

import {
  Text,
  Label,
  Input,
  Button,
  Td,
  Article,
  Row,
  Tbody,
  TableGrid,
} from 'components/SelectYourRegion/styles'
import Flexbox from 'components/shared/Flexbox'
import { appointments, week_days } from 'components/SelectYourRegion/mocks'

const Table: FC = () => (
  <Flexbox col padding='2.5rem 0 0 0'>
    <Article>
      <Label className='py-5' htmlFor='hours'>
        Enter the number of therapy hours you desire to work pre week:
      </Label>
      <Input width='10%' id='hours' className='border p-2' type='number' />
    </Article>
    <Article>
      <Text>I am willing to work some weekend hours on:</Text>
      {React.Children.toArray(
        ['saturday', 'sunday'].map((name) => (
          <>
            <Input width='1rem' id={name} name={name} type='checkbox' />
            <Label width='4rem' htmlFor={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Label>
          </>
        ))
      )}
    </Article>
    <TableGrid>
      <thead>
        <tr className='flex border'>
          {week_days.map((day) => (
            <td className='ml-4 font-bold w-full'>{day}</td>
          ))}
        </tr>
      </thead>
      <Tbody>
        {appointments.map((item) => (
          <Row>
            <Td>{item}</Td>
            <Td />
            <Td />
            <Td />
            <Td />
            <Td />
            <Td />
            <Td />
          </Row>
        ))}
      </Tbody>

      <Article className='flex justify-between items-center gap-4 p-2'>
        <p className='text-sm'>
          Click to select date & time. Click & drag to select multiple dates &
          times. Click day to select all times available.
        </p>
        <div className='flex gap-2'>
          <Button gray>Check all</Button>
          <Button gray>Clear</Button>
        </div>
      </Article>
    </TableGrid>
  </Flexbox>
)

export default Table
