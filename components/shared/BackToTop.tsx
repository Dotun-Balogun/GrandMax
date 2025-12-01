'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-24 p-2  right-6 w-6 h-6  md:w-10 md:h-10 z-80 flex items-center justify-center 
                     bg-primary text-white  shadow-lg hover:bg-primary/80 
                     transition duration-300'
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default BackToTop