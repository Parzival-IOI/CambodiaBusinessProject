import React from 'react'
import P1 from '../Asset/1.png'
import P2 from '../Asset/2.png'
import P3 from '../Asset/3.png'
import P4 from '../Asset/4.png'
import P5 from '../Asset/5.png'
import P6 from '../Asset/6.png'
import P7 from '../Asset/7.png'
import P8 from '../Asset/8.png'
// import P9 from '../Asset/9.png'
// import P10 from '../Asset/10.png'
// import P11 from '../Asset/11.png'
// import P12 from '../Asset/12.png'
// import P13 from '../Asset/13.png'
// import P14 from '../Asset/14.png'
// import P15 from '../Asset/15.png'

function Parallax() {
  return (
    <div className='Parallax'>
      <img src={P1} alt="P1" style={{'--i--n' : '17'}}/>
      <img src={P2} alt="P2" style={{'--i--n' : '16'}}/>
      <img src={P3} alt="P3" style={{'--i--n' : '1'}}/>
      <img src={P4} alt="P4" style={{'--i--n' : '15'}}/>
      <img src={P5} alt="P5" style={{'--i--n' : '14'}}/>
      <img src={P6} alt="P6" style={{'--i--n' : '13'}}/>
      <img src={P7} alt="P7" style={{'--i--n' : '12'}}/>
      <img src={P8} alt="P8" style={{'--i--n' : '11'}}/>
    </div>
  )
}

export default Parallax;