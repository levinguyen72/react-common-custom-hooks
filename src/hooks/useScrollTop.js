import React, { useLayoutEffect } from 'react'

function useScrollToTop() {
    useLayoutEffect(() => {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      })
    }, [])
}

export default useScrollToTop

// for ex: use for button at footer click to scroll to top