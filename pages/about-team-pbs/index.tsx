import { Interpolation, Theme } from '@emotion/react'

import Button from 'components/shared/Button'
import Layout from 'components/Layout/Layout'
import Card from 'components/AboutTeamPbs/Card'
import Avatar from 'components/AboutTeamPbs/Avatar'
import ServiceSection from 'components/shared/ServiceSection'
import Flexbox from 'components/shared/Flexbox'
import { mq } from 'styles/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'
import { employees } from 'utils/mock/employees'

const image = {
  src: '/images/about_us_banner.png',
  alt: 'about us banner',
}

const text = {
  title: 'About PBS Corporation',
  description: 'Improving Quality of Life Outcomes',
}

const buttons = [
  'Locate your regional coordinator',
  'View our service providers',
]

const metaDesc = {
  name: 'description',
  content:
    'Who are we? PBS Corporation is committed to producing outcomes that improve an individual’s skills and quality of life. Learn more about our work!',
}

const style = {
  headingText: mq({ textAlign: 'center', fontSize: '1.25rem', width: ['80%', '80%', '80%', '60%'], padding: '2.5rem 0' }) as Interpolation<Theme>,
  grayBox: mq({
    display: 'flex',
    flexDirection: ['column', 'column', 'row', 'row'],
    height: '33.333333%',
    alignItems: ['center', 'center', 'flex-start', 'flex-start'],
    justifyContent: 'center',
    width: ['100%', '100%', '100%', '80%'],
    margin: 'auto',
  }),
  cardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0 0 2.5rem 0',
  },
  cardText: {
    lineHeight: '1.75rem'
  },
  cardImg: {
    paddingTop: '.5rem',
    marginRight: '1.25rem',
  },
  textBtn: {
    width: '100%',
    lineHeight: '1.5rem',
    margin: ['0 0 6rem 0', '0 0 6rem 0', '0 2.5rem 0 0', '0 2.5rem 0 0']
  },
  title: { fontWeight: 700, fontSize: '2.25rem', padding: '0 0 5rem' },
}

const AboutPage = () => {
  const { width } = useWindowDimensions()

  return (
    <Layout
      title='About Us | PBS Corporation'
      meta={metaDesc}
      image={image}
      text={text}
      height='500px'
    >
      <p css={style.headingText}>
        We use the principles of Applied Behavior Analysis to conduct quality
        assessments and behavioral intervention plans. PBS is committed to
        producing outcomes that improve an individual’s skills and quality of
        life.
      </p>
      <article css={style.grayBox}>
        <Card title='Our Mission'>
          <div css={style.cardContent}>
            <img
              css={style.cardImg}
              src='/images/pages/about/blue-check.png'
              alt='done'
            />
            <p css={style.cardText}>
              Create a responsive system that applies the principles of PBS to
              meet the needs of individuals, families and organizations we serve
              to produce quality of life changes that last
            </p>
          </div>
          <div css={style.cardContent}>
            <img
              css={style.cardImg}
              src='/images/pages/about/blue-check.png'
              alt='done'
            />
            <p css={style.cardText}>
              Develop an organization that attracts the most competent,
              enthusiastic people and turns them into proficient professionals
            </p>
          </div>
        </Card>
        <Card title='Why PBS?'>
          <p css={style.cardText}>
            We are different. Our vision is two-fold, focused both on the clients
            and families we serve and on the staff we work with and invest in
            developing. We are outcome driven and provide a multi-level tier of
            clinical support. We are not just looking for behavior analysts and
            technicians, but are searching for the best of each. If you want to
            work with a team who supports their staff, offers opportunities for
            professional development and growth, and focuses on our families
            first, PBS is for you!
          </p>
        </Card>
      </article>
      <Flexbox col={width < 942} width='60%' gap={width < 942 && '2rem'} padding='2.5rem 0'>
        <p css={style.textBtn}>
          Positive Behavior Supports Corporation is currently operating in the
          United States and Canada. Our headquarters in the US is located at 7108
          S Kanner Hwy, Stuart, FL 34997 and Our central office in Canada is
          located at 32 Turtledove Grove, Scarborough, Ontario M1X.
        </p>
        <Flexbox col gap='.25rem' width='100%'>
          {buttons.map((item, index) => (
            <Button key={index} icon width={width < 942 ? '80%' : '100%'}>
              <span css={{ fontWeight: 600 }}>{item}</span>
            </Button>
          ))}
        </Flexbox>
      </Flexbox>
      <Flexbox col width='80%' margin='4rem 0'>
        <Flexbox col>
          <h3 css={style.title}>
            Leadership Team
          </h3>
          <Avatar
            img='/images/people/mnolan_MThumb.jpg'
            name='Michael Nolan'
            position='Chief Executive Officer'
            description='Michael Nolan Ph.D. is an excellent Board Certified Behavior Analyst and has been the President of Positive Behavior Supports Corp. sinc'
            link='MNolan@teampbs.com'
          />
        </Flexbox>
        <article
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {employees?.map((em) => (
            <Avatar
              key={em.name}
              img={em.img}
              name={em.name}
              position={em.position}
              description={em.description}
              link={em.link}
            />
          ))}
        </article>
      </Flexbox>
      <ServiceSection />
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/employees')
//   const employees = await res.json()

//   if (!employees) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     paths: [
//       { params: { ... } } // See the "paths" section below
//     ],
//     fallback: true, // See the "fallback" section below
//   };
// }

// export async function getStaticProps({ params, res }) {
//   try {    
//     const res = await fetch('http://localhost:3000/api/employees')
//     const employees = await res.json()
  
//     if (!employees) {
//       return {
//         notFound: true,
//       }
//     }

//     return {
//       props: { employees },
//     }
//   } catch (err) {
//         console.log(err);
//         res.statusCode = 404
//     return {
//       props: {
//         employees: {},
//       },
//     };
//   }

// }

export default AboutPage
