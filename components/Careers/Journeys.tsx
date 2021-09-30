import { Play } from 'styles/styles'

const names = [
  { name: 'Cassie' },
  { name: 'Nina' },
  { name: 'Sara' },
  { name: 'Breane' },
]

const Journeys = () => (
  <div className='box'>
    <h3 className='text-3xl font-bold pb-3'>Staff Journeys</h3>
    <p className='pb-3'>Check videos of some of our staff stories</p>
    {names.map(({ name }, index) => (
      <div key={index} className='flex items-center bg-white p-3 my-2'>
        <Play />
        <a href='#'>{name}'s Story</a>
      </div>
    ))}
  </div>
)

export default Journeys
