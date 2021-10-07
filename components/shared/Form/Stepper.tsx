// import { useState } from "react"

import { Interpolation, Theme } from "@emotion/react"
import useWindowDimensions from "hooks/useWindowsDimensions"
import { mq } from "styles/styles"
import { colors } from "utils/constants"

const style = {
  empty: {
    backgroundColor: '#49b2f5',
    border: '1px solid #a4abb1',
    borderRadius: '50%',
    boxSizing: 'border-box',
    color: '#fff',
    fontFamily: `"Open Sans",sans-serif`,
    height: 12,
    lineHeight: 24,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    width: 12,
  } as Interpolation<Theme>,
  full: {
    backgroundColor: 'transparent',
    border: '1px solid #a4abb1',
    borderRadius: '50%',
    boxSizing: 'border-box',
    color: '#fff',
    fontFamily: `"Open Sans",sans-serif`,
    height: 12,
    lineHeight: 24,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    width: 12,
    zIndex: 99,
  } as Interpolation<Theme>,
  box: mq({
    position: 'relative',
    top: -100,
    display: 'flex',
    padding: ['2rem 0', '2rem', '2rem', '2rem'],
    gap: ['1.5rem', '2.5rem', '3.5rem', '3.5rem'],
    background: 'transparent',
    justifyContent: 'center',
    '& :not(:last-child)': {
      ':after': {
        content: ["'_'", "'__'", "'____'", "'____'"],
        position: 'relative',
        top: -195,
        right: -20,
        color: '#a4abb1',
      }
    }
  }) as Interpolation<Theme>,
  container: {
    position: 'relative',
    background: colors.blueMild,
    width: '100%',
  } as Interpolation<Theme>,
} 

const reqArr = [1, 2, 3, 4, 5, 6]

const jobArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Stepper = ({ step = 1, limit, isJobForm = false }) => {
  const { width } = useWindowDimensions()

  return (
    <div css={style.container}>
      <div css={[isJobForm && width < 500 ? { transform: 'scale(80%)' } : width < 900 && { transform: 'scale(80%)' }, style.box]}>
        {!isJobForm && reqArr.map(num => (
          <div css={step === num ? style.empty : style.full} />
        ))}
        {isJobForm && jobArr.map(num => (
          <div css={step === num ? style.empty : style.full} />
        ))}
      </div>
      <p css={{ color: '#8b9199', fontSize: '13px', position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)' }}>Step {step} of {limit}</p>
    </div>
  )
}


export default Stepper
