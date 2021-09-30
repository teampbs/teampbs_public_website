
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

import Flexbox from 'components/shared/Flexbox'
import Layout from 'components/Layout/Layout'
import ServiceSection from 'components/shared/ServiceSection'
import { colors } from 'utils/constants'
import { news } from 'utils/mock/news'
import { Read } from 'styles/styles'
import { InnerFlexMq, OuterFlexMq, style } from 'styles/pages/latest-news.style'

const image = {
  src: '/images/pages/selectYourRegion/banner.png',
  alt: 'news banner',
}

const text = {
  title: 'Latest News, Updates, and Resources',
  description:
    'Find the latest ABA news, articles, and updates from our clinical staff and ABA professionals around the world. Information includes but not limited to, what to do after autism diagnosis, parenting tips, behavior therapy info, ins and outs for school preparation, and navigating the insurance process.',
}

const metaDesc = {
  name: 'description',
  content: 'Latest PBS news',
}

const LatestNews = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Layout
      title='Latest ABA News and Resources | PBS Corporation'
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <Flexbox
        justify='space-between'
        background={colors.blueMild}
        padding='5rem'
        css={OuterFlexMq}
        items='flex-start'
      >
        <Flexbox
          margin='.5rem'
          padding='.5rem'
          width='70%'
          col
          justify='flex-start'
          items='flex-start'
          background={colors.blueMild}
          css={InnerFlexMq}
        >
          {news.map(({ id, title, date }) => (
            <Flexbox
              key={id}
              padding='30px'
              margin='10px'
              col
              items='flex-start'
              background={colors.white}
              gap='1rem'
            >
              <h2 css={style.title}>{title}</h2>
              <Flexbox justify='space-between'>
                <p css={style.dateInfo}>{date} by PBS Corporation</p>
                <Link href={`/latest-news/news-details/${id}`}>
                  <Read css={{ fontSize: '16px', cursor: 'pointer' }}>Read</Read>
                </Link>
              </Flexbox>
            </Flexbox>
          ))}
        </Flexbox>
        <Flexbox
          css={style.picker}
          width='25%'
          col
          justify='flex-start'
          items='flex-start'
          height='500px'
        >
          <h1 css={style.dateTitle}>Filter by Date</h1>
          <DatePicker
            startOpen
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            className='red'
          />
        </Flexbox>
      </Flexbox>
      <ServiceSection />
    </Layout>
  )
}

export default LatestNews
