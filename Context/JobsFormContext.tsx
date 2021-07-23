import { createContext } from 'react'

const InitialState = {
  appInfo: {
    firstName: '',
    MI: '',
    lastName: '',
    qualification: '',
    date_birth: '',
    date_app: '',
    street: '',
    unit: '',
    city: '',
    country: '',
    phone: 0,
    email: '',
    available: '',
  },
  table: {
    saturday: false,
    sunday: false,
    slots: [],
  },
  lawInfo: {
    en: false,
    es: false,
    felony: false,
    description: '',
    hear: '',
    degrees: '',
    coursework: '',
    npi_number: 0,
  },
  education: {
    school: '',
    city: '',
    state: '',
    from: '',
    to: '',
    graduated: '',
    degree: '',
  },
  references: {
    name: '',
    relationship: '',
    company: '',
    phone: 0,
    address: '',
  },
  employment: {
    company: '',
    phone: 0,
    address: '',
    supervisor: '',
    job: '',
    from: '',
    to: '',
    reason: '',
    reference: '',
  },
  resume: {
    your_resume: null
  },
  otherInfo: {
    age: 0,
    full_time: null,
    hours: 0,
    apply: '',
    employed: '',
    positions: '',
    skills: '',
  }
}

const JobsFormContext = createContext(InitialState)

export default JobsFormContext
