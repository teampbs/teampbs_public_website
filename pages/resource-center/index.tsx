import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import ServiceSection from 'components/shared/ServiceSection'
import { colors } from 'utils/constants'

const image = {
  src:'/images/pages/ResourceCenter/banner.png',
  alt:'resources banner',
}

const text = {
  title: 'Resources',
  description: 'Learn more about PBS and ABA',
}

const metaDesc = {
  name: 'description',
  content:
    'Need more information on applied behavior analysis? We enlisted valuable resources on our websites for anyone to read for free. Visit our website!',
}

const ResourceCenter = () => (
  <Layout meta={metaDesc} title='Resource | PBS Corporation' image={image} text={text} height='500px'>
    <Flexbox background={colors.blueMild} padding='5rem 0' gap='2rem'>
      <Flexbox col width='33%'>
        {['Articles', 'Websites', 'Books', 'Presentation'].map(tab => (
          <h3 className='font-bold p-2 w-96 bg-white'>{tab}</h3>
        ))}
      </Flexbox>
      <Flexbox col width='33%'>
        {['Articles', 'Websites', 'Books', 'Presentation'].map(tab => (
          <h3 className='font-bold p-2 w-96 bg-white'>{tab}</h3>
        ))}
      </Flexbox>
    </Flexbox>
    <ServiceSection />
  </Layout>
)

export default ResourceCenter