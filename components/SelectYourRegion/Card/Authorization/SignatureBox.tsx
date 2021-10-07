import SignaturePad from 'react-signature-canvas'

import { style } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const SignatureBox = () => {
  const { width } = useWindowDimensions()
  let sigPad = {}

  const onClear = (e) => {
    e.preventDefault()

    // @ts-ignore
    sigPad.clear()
  }

  return (
    <div css={[style.authorization.box, width < 900 && { width: '100%', '& *': { width: '100%'}}]}>
      <div css={style.authorization.sigWrap}>
        <p css={style.authorization.draw}>Draw Your Signature</p>
        <SignaturePad
          canvasProps={{
            width: '200px',
            height: '50px',
          }}
          ref={(ref) => {
            sigPad = ref
          }}
        />
      </div>
      <button css={style.authorization.btn} onClick={onClear}>
        clear
      </button>
      <p css={style.authorization.date}>03/03/3023</p>
      <div css={style.authorization.cardFooter}>
        <p>Applicant Signature</p>
        <p>Date</p>
      </div>
    </div>
  )
}

export default SignatureBox
