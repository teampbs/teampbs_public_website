const card_1 = (`
  <div className='flex flex-col'>
    <p className='mb-5'>A wide variety of interventions are available for addressing behavioral challenges and, in particular, for treating children with autism.</p>
    <p className='mb-5'>Not all of these interventions have scientific evidence to support their use. PBS Corp believes in using only evidence-based interventions. That means adopting procedures that have a strong theoretical basis, have been subjected to rigorous research, and have been demonstrated to produce observable behavior changes with the individuals who will be receiving services.</p>
    <p className='mb-5'>Such practices have been summarized in that National Standards Report and ABA Guidelines for ASD and are articulated through national associations such as the Associations for Applied Behavior Analysis and Positive Behavior Support. Families and professionals being supported by PBS Corp are encouraged to seek empirical support for the strategies being used.</p>
  </div>
`)

const card_2 = (`
  <p>
    Although reducing behavioral challenges and developing skills are
    important, the overriding goal of PBS is to help individuals and
    families live more positive, productive, and enriching lives.
    Person-centered approaches are geared toward helping individuals and
    their families do more things, go more places, and achieve other
    personal goals. To this end, PBS Corp addresses not only changes in
    behavior, but also quality of life. PBS Corp team members engage
    individuals, family members, and service providers in a
    person-centered planning process to identify desired outcomes,
    ensure that the support strategies are geared to meeting those
    goals, and overcome any barriers to an individual’s success.
  </p>
`)

const card_3 = (`
  <p>
    In order for PBS to work, everyone who is involved in the
    individual’s life must be on the same page. Working together
    requires that everyone 1) communicate openly, 2) develop plans that
    make sense and can be utilized everywhere the individual’s needs
    dictate assistance, and 3) share goals and responsibilities. PBS
    Corp engages caregivers in the assessment and intervention process
    to the greatest extent possible. That means obtaining input through
    interviews and self-recording of data, collaboratively identifying
    strategies based on patterns identified (e.g., rather than simply
    developing plans and giving them to the parent or teacher), and
    providing sufficient training caregivers can fully implement all
    interventions themselves.
  </p>
`)

const card_4 = (`
  <p>
    An accurate understanding of an individual’s behavior, circumstances
    that set the stage for their behavior to occur, and results the
    behavior produces must precede intervention. Therefore, PBS Corp
    team members – under the direction of the contracted behavior
    analyst – complete record reviews, interviews, and direct
    observations across circumstances in which the individual
    participates. They also may conduct types of assessments to evaluate
    the person’s needs, current skills, and environmental features that
    may affect intervention.
  </p>
`)

const card_5 = (`
  <>
    <p>
      Interventions developed based on a thorough assessment incorporate
      multiple components focused on improving behavior and quality of
      life. The emphasis in PBS is on teaching, rather than just
      controlling behavior. The elements of PBS Corp’s behavior support
      plans include:
    </p>
    <h3 className='text-base font-bold py-3'>Prevention:</h3>
    <p>
      modifying aspects of the environment to avoid problems, make
      difficult circumstances better, or add cues to prompt more adaptive
      behavior.
    </p>
    <h3 className='text-base font-bold py-3'>Teaching:</h3>
    <p>
      building skills to help the individual communicate his or her needs,
      interact with other people, deal with unpleasant circumstances, or
      become more self-sufficient.
    </p>
    <h3 className='text-base font-bold py-3'>Management:</h3>
    <p>
      providing consequences that reinforce positive behavior and withhold
      outcomes that may be desirable to individuals when engaging in
      problem behavior.
    </p>
  </>
`)

const card_6 = (`
  <p>
    The effectiveness of behavioral interventions is measured in terms
    of the degree to which problem behavior is reduced and positive
    behavior is increased. PBS Corp contractors collect behavioral data
    on an ongoing basis using progress notes and graphs. They also
    communicate regularly with the individual receiving services, their
    caregivers, and service providers. These data are used to make
    decisions regarding treatment, prepare reports on outcomes, and
    communicate with for consumers, funders, and regulatory bodies.
  </p>
`)

export const expandCards = [
  {
    children: card_1,
    title: 'Evidence-Based Practices.',
  },
  {
    children: card_2,
    title: 'Improving Lives, Not Just Behavior.',
  },
  {
    children: card_3,
    title: 'Engaging Support Providers.',
  },
  {
    children: card_4,
    title: 'Assessing Behavior, Contexts, and Functions.',
  },
  {
    children: card_5,
    title: 'Comprehensive, Individualized Intervention.',
  },
  {
    children: card_6,
    title: 'Data-Based Decision Making.',
  },
]