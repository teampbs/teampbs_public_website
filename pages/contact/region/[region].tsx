import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Interpolation, Theme } from '@emotion/react'
import dynamic from 'next/dynamic'

import Layout from 'components/Layout/Layout'
import Flexbox from 'components/shared/Flexbox'
import Button from 'components/shared/Button'
import { colors } from 'utils/constants'
import { style } from 'styles/pages/contact-region'

const MapCounties = dynamic(() => import('components/shared/MapSection/MapCounties'))


const text = {
  title: '',
  subtitle: '',
  description: '',
}

const metaDesc = {
  name: 'description',
  content:
    'Looking for a Board Certified Behavior Analyst in your area? Get in touch with your local Applied Behavior Analysis therapist and request therapy today.',
}

const Region = () => {
  const router = useRouter()
  const { region } = router.query

  return (
    <Layout
      black
      bg={colors.blueMild}
      meta={metaDesc}
      title='Contact Us | PBS Corporation'
      text={text}
    >
      <Flexbox col background={colors.blueMild}>
        <h4 css={style.title}>{region}</h4>
        <Link href='/contact/region'>
          <p css={style.subtitle_link}>United States</p>
        </Link>
      </Flexbox>
      <Flexbox
        css={style.outerWrapper}
        background={colors.blueMild}
        items='flex-start'
      >
        <Flexbox col width='60%' items='space-between' css={style.innerWrapper}>
          <Link href='/contact/region'>
            <p css={style.backLink}>Back to map</p>
          </Link>
          <Flexbox
            col
            padding='50px 80px'
            margin='0 0 0 auto'
            justify='flex-start'
            items='flex-start'
            height='100%'
            width='100%'
            css={{ borderBottom: '1px solid grey' }}
          >
            <MapCounties />
          </Flexbox>
        </Flexbox>
        <Flexbox css={style.coordinators.wrapper} col items='flex-start'>
          <h2 css={style.coordinators.title}>PBS Regional Coordinators</h2>
          <Flexbox
            css={style.coordinators.body as Interpolation<Theme>}
            col
            gap='.25rem'
          >
            <Link href={`/pbs-team/Sara John`}>
              <a>
                <div
                  css={style.coordinators.nameWrapper as Interpolation<Theme>}
                >
                  <Image
                    css={style.coordinators.image}
                    src='/images/about_us_banner.png'
                    height='120'
                    width='120'
                  />
                </div>
                <h3 css={style.coordinators.name}>Sara John</h3>
              </a>
            </Link>
            <div css={style.coordinators.location}>
              <Image
                height='15px'
                width='10px'
                src='/images/shared/location_icon.png'
                alt='location'
              />
              Greater Toronto Area
            </div>
            <Button width='100%' inverse>
              +1-855-832-6727 Ext.1163
            </Button>
            <Button width='100%'>
              <a
                css={style.coordinators.email}
                href={`mailto:sjohn@teampbs.com`}
              >
                sjohn@teampbs.com
              </a>
            </Button>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Layout>
  )
}

export default Region
