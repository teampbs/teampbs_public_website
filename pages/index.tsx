import dynamic from 'next/dynamic'

import Layout from 'components/Layout/Layout'
import Slider from 'components/Index/Slider/Slider'
import AboutSection from 'components/Index/AboutSection/AboutSection'
import HowItWorks from 'components/Index/HowItWorks/HowItWorks'
import { IMeta } from 'interfaces'
import { mediaCardList } from 'components/Index/HowItWorks/media.mock'

const text = {
  title: 'ABA Therapy',
  subtitle: 'Creating quality of life outcomes that last',
  description: '',
}

const metaDesc: IMeta = {
  name: 'description',
  content:
    'What does PBS Corporation do? We specialize in ABA (Applied Behavior Analysis) aimed at improving behavior and quality of life of individuals. Learn more!',
}

const MapSection = dynamic(() => import('components/shared/MapSection/MapSection'))
const Presentation = dynamic(() => import('components/Index/Presentation/Presentation'))

const Index = () => (
  <Layout meta={metaDesc} video text={text}>
    <Slider />
    <AboutSection />
    <HowItWorks list={mediaCardList} />
    <MapSection />
    <Presentation />
  </Layout>
)

export default Index
