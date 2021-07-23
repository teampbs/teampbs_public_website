import { Global } from '@emotion/react'
import { useEffect, useState, FC } from 'react'
import Head from 'next/head'

import { styles } from 'styles/global'
import Header from 'components/Header/Header'
import Footer from 'components/Layout/Footer/Footer'
import { ILayout } from 'interfaces'

const Layout: FC<ILayout> = ({
  children,
  title = 'ABA Therapy | Applied Behavior Analysis | PBS Corporation',
  meta,
  text,
  image,
  height,
  video,
  bg,
  black,
  moreInfo,
}) => {
  const [scrolling, setScrolling] = useState(null)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () =>
    window.pageYOffset > 140 ? setScrolling(true) : setScrolling(false)

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name={meta.name} content={meta.content} />
        <link rel='shortcut icon' href='/favicon.ico' />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
        </style>
      </Head>
      <div className='flex flex-col items-center text-black00'>
        <Global styles={styles} />
        <Header
          moreInfo={moreInfo}
          video={video}
          text={text}
          scrolling={scrolling}
          height={height}
          image={image}
          black={black}
          bg={bg}
        />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
