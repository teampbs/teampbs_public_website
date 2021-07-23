import { useState } from 'react'
import JobsFormContext from './JobsFormContext'

function JobsFormProvider(props) {
  const [ JobsForm, setJobsForm ] = useState({})

  return (
    <JobsFormContext.Provider
      value={{
        JobsForm,
        setJobsForm,
      }}
      {...props}
    >
      {props.children}
    </JobsFormContext.Provider>
  )
}

export default JobsFormProvider