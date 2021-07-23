export const Expand = ({ title }) => (
  <div className="flex items-center bg-white shadow mb-3">
    <img src='/images/pages/careers/arrow-down.png' alt='arrow-down' className='h-3 w-5 mx-10 arrow-down' />
    <div className='description'>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-base py-2 text-darkGray">
        Location: <span className="text-black00">All Regions</span>
      </p>
    </div>
  </div>
)
