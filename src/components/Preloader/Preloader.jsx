import React, { useState, useEffect } from 'react'
import "./Preloader.css"

function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null // hide preloader after 3s

  return (
  <div className='preloader'>
    <div className='loading-text'>
      Loading<span className='dots'></span>
    </div>
  </div>
)


}

export default Preloader
