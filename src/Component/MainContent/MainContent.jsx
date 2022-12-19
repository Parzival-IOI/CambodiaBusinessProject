import React from 'react'
import './MainContent.css'
import {useInView} from 'react-intersection-observer'
import IntroSection from './EachSection/IntroSection'
import PLanguage from './EachSection/PLanguage'


const MainContent = () => {

  const {ref: Element, inView: isIntersect} = useInView({triggerOnce: true})
  const {ref: PL, inView: isPL} = useInView({triggerOnce: true})

  return (
    <div className='MainContent' >
      {/* <section className={`${isIntersect ? "close open" : 'close'}`} ref={Element} >Hello There How Are You Doing</section> */}
      <IntroSection isIntersect={isIntersect} ref={Element} />
      <PLanguage isIntersect={isPL} ref={PL} />
    </div>
  )
}

export default MainContent;