import {React, useEffect, useState} from 'react'
import P1 from '../Asset/1.png'
import P2 from '../Asset/2.png'
import P3 from '../Asset/3.png'
import P4 from '../Asset/4.png'
import P5 from '../Asset/5.png'
import P6 from '../Asset/6.png'
import P7 from '../Asset/7.png'
import P8 from '../Asset/8.png'
import P9 from '../Asset/9.png'
import P10 from '../Asset/10.png'
import P11 from '../Asset/11.png'
import P12 from '../Asset/12.png'

import useScroll from '../Hook/useScroll'



function Parallax() {

  const [position, setPosition] = useState(0);
  const Scroll = useScroll();

  

  useEffect(()=> {
    setPosition(Scroll);
  },[Scroll])

  console.log(position)



  return (
    <div className='Parallax'>
      <img src={P1} alt="P1" style={{'--i--n' : '17'}}/>
      <img src={P2} alt="P2" style={{'--i--n' : '15'}}/>
      <img src={P3} alt="P3" style={{'--i--n' : '14'}}/>
      <img src={P4} alt="P4" style={{'--i--n' : '12'}}/>
      <img src={P5} alt="P5" style={{'--i--n' : '10'}}/>
      <img src={P6} alt="P6" style={{'--i--n' : '8'}}/>
      <img src={P7} alt="P7" style={{'--i--n' : '6'}}/>
      <img src={P8} alt="P8" style={{'--i--n' : '9'}}/>
      <img src={P9} alt="P9" style={{'--i--n' : '7'}}/>
      <img src={P10} alt="P10" style={{'--i--n' : '11'}}/>
      <img src={P11} alt="P11" style={{'--i--n' : '16'}}/>
      <img src={P12} alt="P12" style={{'--i--n' : '13'}}/>
    </div>
  )
}

export default Parallax;