import {React, useEffect, useState} from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import Riff1 from '../Asset/1Riff.png'
import Riff2 from '../Asset/2Riff.png'
import Riff3 from '../Asset/3Riff.png'
import AFish from '../Asset/AFish.png'
import BFish from '../Asset/BFish.png'
import Fish from '../Asset/Fish.png'
import BackRiff from '../Asset/BackRiff.png'
import Turtle from '../Asset/Turtle.png'
import PH from '../Asset/PH.png'

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
      <LazyLoadImage className='img' src={Riff1} alt="P1" style={{'--i--n' : '8'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={Riff2} alt="P2" style={{'--i--n' : '5'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={Riff3} alt="P3" style={{'--i--n' : '3'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={AFish} alt="P4" style={{'--i--n' : '6'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={BFish} alt="P5" style={{'--i--n' : '7'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={Fish} alt="P6" style={{'--i--n' : '4'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={BackRiff} alt="P7" style={{'--i--n' : '1'}} placeholderSrc={PH}/>
      <LazyLoadImage className='img' src={Turtle} alt="P9" style={{'--i--n' : '2'}} placeholderSrc={PH}/>
    </div>
  )
}

export default Parallax;