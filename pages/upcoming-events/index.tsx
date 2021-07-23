import Layout from 'components/Layout/Layout'

const image = {
  src:'/images/about_us_banner.png',
  alt:'eligibility banner',
}

const text = {
  title: 'ABA Therapy Training Online',
  subtitle: ' intervention.',
}

const metaDesc = {
  name: 'description',
  content: 'Want to become a certified ABA certified behavior analyst? Check out the upcoming events and undergo ABA therapy training online. Visit our website!'
}

const UpcomingEvents = () => <Layout meta={metaDesc} title='ABA Therapy Training Online | PBS Corporation' image={image} text={text} height='500px' />

export default UpcomingEvents
