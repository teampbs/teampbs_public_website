
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import { colors } from 'utils/constants'
import {
  details_style as style,
  InnerFlexDetailsMq,
  OuterFlexDetailsMq,
} from 'styles/pages/latest-news.style'
import Button from 'components/shared/Button'
import Image from 'next/image'

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
  const { name } = router.query

  return (
    <Layout
      title={`${name} | Latest ABA News, Updates, and Resources | PBS Corporation`}
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <Flexbox
        css={OuterFlexDetailsMq}
        background={colors.blueMild}
        items='flex-start'
      >
        <Flexbox
          col
          width='50vw'
          items='space-between'
          css={InnerFlexDetailsMq}
        >
          <Link href='/contact/region'>
            <a css={style.breadcrumb}>
              <Image
                src='/images/pages/LatestNews/grey_back_arrow.png'
                alt='back arrow'
                height='10'
                width='8'
              />{' '}
              <span css={{ paddingLeft: '1rem' }}>Back To map</span>
            </a>
          </Link>
          <Flexbox
            col
            padding='50px 80px'
            justify='flex-start'
            items='flex-start'
            background={colors.white}
          >
            <Flexbox css={{ position: 'relative' }} justify='center' gap='.5rem' col margin='35px 0'>
              <div css={{ position: 'absolute', top: '-60%' }}>
                <Image
                  css={{
                    borderRadius: '50%',
                  }}
                  src='/images/about_us_banner.png'
                  alt='picture'
                  width='160px'
                  height='160px'
                />
              </div>
              <h2
                css={{ padding: '25px 0', fontSize: 32, color: colors.black10 }}
              >
                Michael Nolan
              </h2>
              <p css={{ fontSize: '13px', color: colors.darkGray }}>
                BCBA-D , Chief Executive Officer
              </p>
              <Flexbox gap='.5rem' margin='0 0 1rem 0'>
                <Image height='15px' width='10px' src='/images/shared/location_icon.png' alt='location' />
                <p css={style.date} className='text-sm'>
                  Broward
                </p>
              </Flexbox>
              <Button inverse>+1-23123-2131-2313123</Button>
              <Button><a href="mailto:MNolan@teampbs.com">MNolan@teampbs.com</a></Button>
            </Flexbox>
            <p css={style.description}>
              Michael Nolan Ph.D. is an excellent Board Certified Behavior
              Analyst and has been the President of Positive Behavior Supports
              Corp. since 2007. Michael attended the University of South Florida
              where he received a Masters in Education, and the University of
              Tennessee, Knoxville, where he received a doctoral degree in
              Educational Psychology. Michael has served individuals with
              behavioral concerns in a variety of educational settings,
              including elementary, middle, and high schools and home and
              community settings. In addition, Michael has previously worked as
              a faculty member at the University of South Florida, where he
              conducted training and research as part of the Positive Behavior
              Support Project. Michael has also served as an instructor at
              Florida Atlantic University in Applied Behavior Analysis. Michaels
              areas of expertise include leading schools in implementing
              school-wide behavioral programs resulting in improved educational
              environments. Michael has worked as a behavior analyst with
              individuals with severe disabilities to develop behavior plans
              that reduce problem behaviors such as self-injury, aggression,
              elopement, and property destruction and teach acquisition skills
              that lead to significant improvements in quality of life.
            </p>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Layout>
  )
}

export default NewsDetails
