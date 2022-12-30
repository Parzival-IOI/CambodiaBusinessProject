import React from 'react'
import code from '../../../Asset/code.png'

const PLanguage =  React.forwardRef((props, myRef)  => {
  return (
    <section ref={myRef} className={`${props.isIntersect ? "close open" : 'close'}`}>
        <div className="text1">
            <div className="Til2">
              <div className="animateGradientColorBG"><h4>My Work</h4></div>
            </div>
        </div>
        <div className="perspective">
          <img src={code} alt="Code" className='Code'/>
          <img src={code} alt="Code" className='Code'/>
          <img src={code} alt="Code" className='Code'/>
        </div>
    </section>
  )
})

export default PLanguage;