import React from 'react'

const PLanguage =  React.forwardRef((props, myRef)  => {
  return (
    <section ref={myRef} className={`${props.isIntersect ? "close open" : 'close'}`}>
        <div className="text1">
            <h4>Introduction</h4>
            <p>Greeting, My name is <b style={{color : 'var(--bg-l4)'}}>Parzival</b> and Welcome to my <b style={{color : 'var(--bg-l4)'}}>Portfolio</b>.</p>
            <p>I'm currently a second year student at RUPP. Study in Computer Science field.</p>
        </div>
    </section>
  )
})

export default PLanguage;