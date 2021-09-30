import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (typeof globalThis !== 'undefined' && process.browser) {
      function handleResize() {
        setWindowDimensions({
          width: globalThis.innerWidth,
          height: globalThis.innerHeight,
        })
      }

      globalThis.addEventListener('resize', handleResize)
      return () => globalThis.removeEventListener('resize', handleResize)
    }

  }, [])

  return windowDimensions
}