import Expand from 'components/Careers/Expand'
import { QuoteSlider } from 'components/Careers/Slider'
import Journeys from 'components/Careers/Journeys'
import { style } from 'components/Careers/style'

const jobs = [
  {
    title: 'Behavior Assistant',
    text: 'Behavior assistant services are direct activities related to the delivery of behavior analysis services and are designated in and required by a behavior analysis service plan. Activities include monitoring of behavior analysis services, the implementation of behavioral procedures for acquisition of replacement skills and reduction of problematic behaviors, data collection and display (e.g., graphics) as authorized by a recipient’s behavior analysis service plan and assist the behavior analyst in training of caregivers and/or staff.',
    roleDescription:
      'We are searching for individuals who are passionate and dedicated to helping others. This position is the face of the organization and individuals in this role have a daily impact on improving the quality of life for the individuals served as they provide 1:1 direct behavior analysis services in home and community settings. Behavior assistants carry out treatment as designed by the supervising behavior analyst which includes facilitating environmental arrangements, using proactive strategies, teaching and developing new skills, and managing specific consequences for behavior based on function.',
  },
  {
    title: 'Registered Behavior Technician',
    text: 'The Registered Behavior TechnicianTM (RBT®) is a paraprofessional who practices under the close, ongoing supervision of a BCBA, BCaBA, or FL-CBA. The RBT is primarily responsible for the direct implementation of behavior-analytic services. The RBT does not design intervention or assessment plans. It is the responsibility of the RBT supervisor to determine which tasks an RBT may perform as a function of his or her training, experience, and competence. The BACB certificant supervising the RBT is responsible for the work performed by the RBT on the cases they are overseeing.',
    roleDescription:
      'We are searching for individuals credentialed as a RBT by the Behavior Analyst Certification Board (BACB) who are enthusiastic about collaborating with others to achieve quality of life improvements for the individuals served. Our RBTs are committed to providing quality and effective behavior analysis services to individuals with autism and other varying developmental disabilities. RBTs work under the supervision of a supervising behavior analyst and are responsible for direct 1:1 implementation of behavior plans. RBTs may also provide assessment, graphing, and training support.',
  },
  {
    title: 'Behavior Analyst',
    text: 'Behavior analysis services are provided to assist individuals to learn new behaviors that are directly related to existing challenging behaviors or functionally equivalent replacement behaviors for identified challenging behaviors. Services may also be provided to increase existing behavior, to reduce existing behavior, and to help the individual emit behavior under precise environmental conditions. The term “behavior analysis services” includes the terms “behavior programming” and “behavioral programs.” Behavior analysis includes the design, implementation and evaluation of systematic environmental modifications for the purposes of producing socially significant improvements in behavior. It includes identification of functional relationships between behavior and environment. It uses direct observation and measurement of behavior and environment. Contextual factors, establishing operations, antecedent stimuli, positive reinforcement and other consequences are used based on identified functional relationships between behavior and environment, in order to produce practical behavior change.',
    roleDescription:
      'We are searching for Board Certified Analysts across all levels of certification eager to join a network of clinicians who are driven to make positive impacts in the quality of life for those we serve. This position offers the freedom to work a flexible schedule under a variety of contracts, funding sources, and within diverse client populations all while gaining the benefits of being part of a collaborative team of professionals.',
  },
]

export const JobsSection = () => (
  <section css={style.section}>
    <article css={style.article}>
      <h3 css={style.title}>Open positions</h3>
      <p css={style.text}>
        PBS is an equal opportunity workplace. Employment selection and related
        decisions are made without regard to sex, race, age, disability,
        religion, national origin, color or any other protected class.
      </p>
      {jobs.map((job, index) => (
        <Expand key={index} {...job} />
      ))}
    </article>
    <article css={style.article}>
      <div className='py-3'>
        <h3 className='text-3xl font-bold pb-10'>Why Team PBS?</h3>
        <p className='pb-16'>
          Why Team PBS? We are different. Our vision is focused both on the
          families we serve, and the team members we develop. We are outcome
          driven and provide a multi-level tier of clinical support. We are not
          just looking for behavior analysts and technicians. We are searching
          for the best, who are looking to make lasting change in families
          lives. If you want to work with a team who supports you, offers you
          professions development and growth, and directs focus on our families
          first, PBS is the team for you!
        </p>
      </div>
      <QuoteSlider />
      <Journeys />
    </article>
  </section>
)
