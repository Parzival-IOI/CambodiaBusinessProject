import React from 'react'
import './MainContent.css'
import {useInView} from 'react-intersection-observer'
import IntroSection from './EachSection/IntroSection'


const MainContent = () => {

  const {ref: Element, inView: isIntersect} = useInView()

  return (
    <div className='MainContent' >
      {/* <section className={`${isIntersect ? "close open" : 'close'}`} ref={Element} >Hello There How Are You Doing</section> */}
      <IntroSection isIntersect={isIntersect} ref={Element} />
    </div>
  )
}

export default MainContent;