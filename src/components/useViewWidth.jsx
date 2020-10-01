import { useState, useEffect } from 'react'

const getViewportWidth = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

const useViewWidth = () => {
  const [vw, setVW] = useState(0)
  useEffect(() => {
    const handleResize = () => setVW(getViewportWidth())
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return vw
}

export default useViewWidth
