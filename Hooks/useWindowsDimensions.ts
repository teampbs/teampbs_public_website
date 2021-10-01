import { useState, useEffect } from 'react'



const useWindowDimensions = () => {
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

export default useWindowDimensions