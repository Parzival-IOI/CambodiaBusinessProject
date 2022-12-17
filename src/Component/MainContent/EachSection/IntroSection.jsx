import React from 'react'
import Profile from '../../../Asset/Profile.jpg'

const IntroSection =  React.forwardRef((props, myRef)  => {
  return (
    <section ref={myRef} className={`${props.isIntersect ? "close open" : 'close'}`}>
        <img src={Profile} alt="......" className='ImgProfile'/>
        <div className="text1">
            <h4>Introduction</h4>
            <p>Greeting, My name is <b style={{color : 'var(--bg-l4)'}}>Parzival</b> and Welcome you to my <b style={{color : 'var(--bg-l4)'}}>Portfolio</b>.</p>
            <p>I'm currently a student at RUPP year 2 in Computer Science.</p>
        </div>
    </section>
  )
})

export default IntroSection