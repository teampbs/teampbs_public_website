import Button from 'components/shared/Button'
import Layout from 'components/Layout/Layout'
import Card from 'components/AboutTeamPbs/Card'
import Avatar from 'components/AboutTeamPbs/Avatar'
import ServiceSection from 'components/shared/ServiceSection'
import { employees } from 'utils/mock/employees'
import Flexbox from 'components/shared/Flexbox'

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

const AboutPage = () => (
  <Layout
    title='About Us | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <p className='text-center text-xl w-3/5 py-10 leading-7'>
      We use the principles of Applied Behavior Analysis to conduct quality
      assessments and behavioral intervention plans. PBS is committed to
      producing outcomes that improve an individual’s skills and quality of
      life.
    </p>
    <article className='flex h-1/3 justify-center w-4/5 m-auto'>
      <Card title='Our Mission'>
        <div className='row flex items-start justify-center pb-10'>
          <img
            className='pt-2 mr-5'
            src='/images/pages/about/blue-check.png'
            alt='done'
          />
          <p className='leading-7'>
            Create a responsive system that applies the principles of PBS to
            meet the needs of individuals, families and organizations we serve
            to produce quality of life changes that last
          </p>
        </div>
        <div className='row flex items-start justify-center pb-10'>
          <img
            className='pt-2 mr-5'
            src='/images/pages/about/blue-check.png'
            alt='done'
          />
          <p className='leading-7'>
            Develop an organization that attracts the most competent,
            enthusiastic people and turns them into proficient professionals
          </p>
        </div>
      </Card>
      <Card title='Why PBS?'>
        <p className='leading-7'>
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
    <Flexbox width='60%' padding='2.5rem 0'>
      <p className='w-full leading-6 text-left mr-10'>
        Positive Behavior Supports Corporation is currently operating in the
        United States and Canada. Our headquarters in the US is located at 7108
        S Kanner Hwy, Stuart, FL 34997 and Our central office in Canada is
        located at 32 Turtledove Grove, Scarborough, Ontario M1X.
      </p>
      <Flexbox col gap='.25rem' width='100%'>
        {buttons.map((item) => (
          <Button icon width='100%'>
            <span css={{ fontWeight: 600 }}>{item}</span>
          </Button>
        ))}
      </Flexbox>
    </Flexbox>
    <Flexbox col width='80%' margin='4rem 0'>
      <Flexbox col>
        <h3 css={{ fontWeight: 700, fontSize: '2.25rem', padding: '0 0 5rem' }}>
          Leadership Team
        </h3>
        <Avatar
          img='/images/profile.png'
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
        {employees.map((em) => (
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

export default AboutPage
