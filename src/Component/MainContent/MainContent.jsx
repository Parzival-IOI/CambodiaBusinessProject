import React from 'react'
import './MainContent.css'
import {useInView} from 'react-intersection-observer'


const MainContent = () => {

  const {ref: Element, inView: isIntersect} = useInView()

  return (
    <div className='MainContent' >
      <div className={`${isIntersect ? "open" : 'close'}`} ref={Element} >Hello There How Are You Doing</div>
    </div>
  )
}

export default MainContent;