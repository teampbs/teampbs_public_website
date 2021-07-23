export interface IImage {
  src?: string
  alt?: string
}

export interface IField {
  id: string
  label: string
  type: string
  width: string
  placeholder: string
  disabled: boolean
  select: boolean
  labelWidth: string
  maxLength: number
  list: string[]
  value: any
}

export interface IMeta {
  name: string
  content: string
}

export interface ILayout {
  title?: string
  text?: {
    title?: string
    subtitle?: string
    description?: string
  }
  meta?: IMeta
  image?: IImage
  height?: string
  video?: boolean
  bg?: string
  black?: boolean
  moreInfo?: boolean
}
export interface text {
  title?: string
  subtitle?: string
  description?: string
}
export interface IAvatar {
  img: string
  name: string
  position: string
  description: string
  link: string
}

export interface ICard {
  num: number
  isTable?: boolean
  title: string
  subtitle?: string
  require?: boolean
  submit?: boolean
}

export interface IDropDownLink {
  title: string
  href: string
  parentId?: number
}

export interface INavLink {
  title: string
  links: IDropDownLink[]
  isEmpty: boolean
}

export interface IExpand {
  expand?: boolean
  small?: boolean
  isOpen?: boolean
  toggle?: any
  title: string
}

export interface IHeader {
  video?: boolean
  image?: IImage
  text?: text
  height?: string
  scrolling?: boolean
  bg?: string
  black?: boolean
  moreInfo?: boolean
}
export interface ITitleSection {
  title: string
  subtitle: string
  description: string
  moreInfo: boolean
  isScroll: boolean
}
export interface ILogo {
  src: string
  alt: string
  width: string | number
  height: string | number
  isLogo?: boolean
  isScroll?: boolean
}

export interface IFlex {
  col: boolean
  justify: string
  gap: string
  items: string
  width: string
  margin: string
  className: string
  color: string
  background: string
  padding: string
  height: string
}

// export interface IJobApplication {
//     appInfo: {
//       firstName: string
//       MI: string
//       lastName: string
//       qualification: string
//       analystType: string
//       bacb_number: number
//       license: string
//       date_birth: Date
//       date_app: Date
//       street: string
//       unit: string
//       city: string
//       county: string
//       phone: number
//       email: string
//       available: Date
//     },
//     table: {
//       available_time: boolean[]
//     }
//     lawInfo: {
//       en: boolean
//       es: boolean
//       citizenship: boolean
//       felony: boolean
//       felony_explain: string
//       description: string
//       hear: string
//       degrees: string
//       coursework: string
//       npi_number: string
//       enum_date: Date
//       taxonomy: string
//     }
//     education: {
//       school: string
//       city: string
//       state: string
//       from: string
//       to: string
//       graduated: string
//       degree: string
//     }
//     references: {
//       name: string
//       relationship: string
//       company: string
//       phone: number
//       address: string
//     }
//     employment: {
//       company: string
//       phone: number
//       address: string
//       supervisor: string
//       job: string
//       from: string
//       to: string
//       reason: string
//       reference: string
//     }
//     resume: {
//       your_resume: null
//     }
//     otherInfo: {
//       age: number
//       full_time: null
//       hours: number
//       apply: string
//       employed: string
//       positions: string
//       skills: string
//     }
//   }
