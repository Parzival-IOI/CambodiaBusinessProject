import React from 'react'
import Profile from '../../../Asset/Profile.jpg'

const IntroSection =  React.forwardRef((props, myRef)  => {
  return (
    <section ref={myRef} className={`close ${props.isIntersect ? "open" : ''}`}>
        <img src={Profile} alt="......" className='ImgProfile'/>
        <div className="text1">
            <div className='Til'>
              <h4>Introduction</h4>
            </div>
            <p>Greeting &nbsp;
              <b style={{color : 'var(--bg-l4)'}}>fellow stranger</b>,&nbsp;My name is &nbsp;
              <b style={{color : 'var(--bg-l4)'}}>Parzival</b>.
            </p>
            <p>I'm a junior <b style={{color : 'var(--bg-l1)'}}>front-end developer</b>.</p>
        </div>
    </section>
  )
})

export default IntroSection;