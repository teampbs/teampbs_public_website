import { useState, useEffect } from 'react'

interface IwindowDimensions {
  width: number | undefined
  height: number | undefined
}


export function useWindowDimensions(): IwindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight,
      })
    }

    globalThis.addEventListener('resize', handleResize)
    return () => globalThis.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}