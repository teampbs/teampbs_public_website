import { useState, useEffect } from 'react'

interface IWindowDimensions {
  width: number | undefined
  height: number | undefined
}


export const useWindowDimensions = (): IWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize(): void {
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