const dropDownLinks_1 = [
  { parentId: 111, href: '/aba-services', title: 'Eligibility' },
  { parentId: 111, href: '/request-aba-services', title: 'Request ABA Therapy' },
]

const dropDownLinks_2 = [
  { parentId: 222, href: '/about-team-pbs', title: 'About PBS Corporation' },
  { parentId: 222, href: '/what-is-applied-behavior-analysis', title: 'About ABA' },
  { parentId: 222, href: '/team-pbs-videos', title: 'Company Videos' },
  { parentId: 222, href: '/contact/region', title: 'Contact Us' },
  { parentId: 222, href: '/resource-center', title: 'Resources' },
]

const dropDownLinks_3 = [
  { parentId: 444, href: '/careers', title: 'Available Positions' },
  { parentId: 444, href: '/job-application', title: 'Work With Us' },
]

const dropDownLinks_4 = [
  { parentId: 555, href: '/contact/region', title: '(855) TEAMPBS' },
  { parentId: 555, href: '/contact/region', title: '+1-855-832-6727' },
  { parentId: 555, href: '/contact/region', title: 'Contact PBS Corporation' },
]

export const navs = [
  { id: 111, title: 'Request ABA Therapy', links: dropDownLinks_1, isEmpty: false },
  { id: 222, title: 'About', links: dropDownLinks_2, isEmpty: false },
  { id: 333, title: 'Training', links: [], isEmpty: true },
  { id: 444, title: 'Careers', links: dropDownLinks_3, isEmpty: false },
  { id: 555, title: 'Contact', links: dropDownLinks_4, isEmpty: false },
]