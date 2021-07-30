import { style } from 'components/Policies/styles'

const RefundPolicy = () => (
  <>
    <h3 css={style.tabContent.title}>Refund Policy</h3>
    <span css={style.tabContent.date}>Last updated: 03/18/2021</span>
    <p css={style.tabContent.text}>
    No refunds will be provided to participants in ABA therapy after services are rendered. If you are not satisfied with your ABA services please contact your regional coordinator to discuss the concern.
    </p>
    <p css={style.tabContent.text}>
    If you are registered for a training, you may cancel within 2 weeks of the event for full refund. Within 2 weeks of the training, you may request a full refund or move the training event to a different date when available at no charge.
    </p>
    <p css={style.tabContent.text}>
    We may refund your any prepaid training fees to you if there are circumstances beyond our control which cancel the training event such as: limited enrollment, inclement weather, power outages in the building, speaker cancellation due to illness.
    </p>
  </>
)

export default RefundPolicy