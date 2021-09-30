// import { FC } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { Interpolation, Theme } from '@emotion/react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { style } from 'components/Index/styles'
import { news } from 'utils/mock/news'

interface ISlide {
  id: number
  description: string
  title: string
}

const Slider = () => (
  <div css={style.slider.container}>
    <Carousel
      transitionTime={1000}
      autoPlay={false}
      infiniteLoop={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {news?.map(({ id, title }: ISlide) => (
        <div css={style.slider.card} key={id}>
          <Link href='/latest-news'>
            <a css={style.slider.title as Interpolation<Theme>}>
              Latest ABA News and Resources
            </a>
          </Link>
          <p css={style.slider.text}>
            {title}
            <Link href={`/latest-news/news-details/${id}`}>
              <a css={style.slider.link}>Read</a>
            </Link>
          </p>
        </div>
      ))}
    </Carousel>
  </div>
)

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/news')
//   const news = await res.json()

//   if (!news) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { news },
//   }
// }

export default Slider
