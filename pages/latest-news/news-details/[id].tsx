
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import ServiceSection from 'components/shared/ServiceSection'
import { colors } from 'utils/constants'
import { news } from 'utils/mock/news.mock'
import { details_style as style, InnerFlexDetailsMq, OtherNewsMq, OuterFlexDetailsMq } from 'styles/pages/latest-news.style'

const image = {
  src: '/images/pages/selectYourRegion/banner.png',
  alt: 'news banner',
}

const text = {
  title: '',
  description: '',
}

const metaDesc = {
  name: 'description',
  content: 'Latest PBS news',
}



const NewsDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const newsById = news.find((n) => n.id === +id)

  return (
    <Layout
      title={`${newsById?.title} | Latest ABA News, Updates, and Resources | PBS Corporation`}
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <Flexbox css={OuterFlexDetailsMq} background={colors.blueMild} items='flex-start'>
        <Flexbox
          col
          width='50vw'
          items='space-between'
          css={InnerFlexDetailsMq}
        >
          <Link href='/latest-news'>
            <p css={style.breadcrumb}>
              <img src='/images/pages/LatestNews/grey_back_arrow.png' alt='back arrow' /> Back To Latest ABA News, Updates and Resources
            </p>
          </Link>
          <Flexbox
            col
            padding='50px 80px'
            justify='flex-start'
            items='flex-start'
            background={colors.white}
          >
            <p css={style.p}>LATEST ABA NEWS, UPDATES, AND RESOURCES</p>
            <h2 css={style.title}>{newsById?.title}</h2>
            <Flexbox justify='space-between' margin='35px 0'>
              <p css={style.date} className='text-sm'>{newsById?.date} by PBS Corporation</p>
              <span css={style.social}>
                <p className='w-full text-center'>Share</p>
                <img css={style.img} src="/images/fb.png" alt="Facebook icon" />
                <img css={style.img} src="/images/in.png" alt="LinkedIn icon" />
              </span>
            </Flexbox>
            <p css={style.description}>{newsById?.description}</p>
          </Flexbox>
        </Flexbox>
        <Flexbox css={OtherNewsMq} col width='30%' margin='2rem' items='flex-start'>
          <h2 css={style.subtitle}>Other ABA News, Updates, and Resources</h2>
          <p css={style.p}>No data available.</p>
        </Flexbox>
      </Flexbox>
      <ServiceSection />
    </Layout>
  )
}

export default NewsDetails
