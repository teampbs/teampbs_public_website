import { style } from 'components/Policies/styles'

const PaymentPolicy = () => (
  <>
    <h3 css={style.tabContent.title}>Payment Policy</h3>
    <span css={style.tabContent.date}>Last updated: 03/18/2021</span>
    <p css={style.tabContent.text}>
      Behavior Analysis services are billed according to rates
      determine by funding sources (i.e., insurance companies). A
      determined amount you may be responsible for (i.e. copay,
      coinsurance), will be billed to you. If you are unclear of your
      benefits, please confirm them with your insurance provider or
      PBS Regional Coordinator.
    </p>
    <p css={style.tabContent.text}>
      Private pay funded cases receive a contract for services with
      pay rates that are commensurate of provider credentials and sign
      this contract in advance before any services are rendered or
      billed.
    </p>
  </>
)

export default PaymentPolicy