
import { FC } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import {
  NewsCard,
  NewsTitle,
  Read
} from 'components/Index/styles'
import { news } from 'utils/mock/news.mock'
import { colors } from 'utils/constants'

interface ISlide {
  id: number
  description: string
  title: string
}

const Slider: FC = () => (
  <div css={{ width: '100%', boxShadow: 'rgba(100, 100, 100, 0.07) 0px 7px 12px 0px' }}>
    <Carousel transitionTime={1000} autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
      {news.map(({ id, title }: ISlide) => (
        <NewsCard key={id}>
          <Link href='/latest-news'>
            <NewsTitle>
              Latest ABA News and Resources
            </NewsTitle>
          </Link>
          <p css={{ fontSize: 15, color: colors.black10, padding: '0 0 0 15', }}>
            {title}
            <Link href={`/latest-news/news-details/${id}`}>
              <Read>Read</Read>
            </Link>
          </p>
        </NewsCard>
      ))}
    </Carousel>
  </div>
)

export default Slider