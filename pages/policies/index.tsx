import Layout from 'components/Layout/Layout'

const text = {
  title: 'Policies',
  subtitle: ''
}

const metaDesc = {
  name: 'description',
  content:
    'Read our Payment Policy, Privacy Policy, HIPAA Notice of Privacy Practices and Terms of Use before using the PBS Corporation website.',
}

const Policies = () => <Layout title='Policies | PBS Corporation' meta={metaDesc} text={text} height='500px' />

export default Policies
