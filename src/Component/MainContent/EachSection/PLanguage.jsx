import React from 'react'
import code from '../../../Asset/code.png'

const PLanguage =  React.forwardRef((props, myRef)  => {
  return (
    <section ref={myRef} className={`${props.isIntersect ? "close open" : 'close'}`}>
        <div className="text1">
            <h4>My Knowledge</h4>
            
        </div>
        <img src={code} alt="Code" loading='lazy' className='Code'/>
    </section>
  )
})

export default PLanguage;