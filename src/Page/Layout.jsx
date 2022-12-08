import {useState, useEffect} from 'react'
import { useRef } from 'react';
import {Outlet, Link} from 'react-router-dom'
import useScroll from '../Hook/useScroll'

function Layout() {
  const [position, setPosition] = useState(0);
  const prev = useRef(0);
  const Scroll = useScroll();
  
  useEffect(()=> {
      setPosition(Scroll);
  }, [Scroll])
  useEffect(()=>{
      prev.current = position;
  },[position]);

  function NavChanges () {
    if(position <= 50) {
      return 'nav';
    }
    else if(position > 50){
      if(position >= prev.current) {
        return 'nav active top-20'
      }
      else if(position < prev.current) {
        return 'nav active top-0'
      }
    }
    return 'nav'
  }
  // position === 0 ? 'nav trans': 'nav'} style={position > prev.current ? {top : "-20vw"} : {top: "0"}
  return (
    <>
        <nav className={NavChanges()} >
            <Link to="/Portfolio/" className='Link'>Home</Link>
            <div className="Link">Something</div>
            <div className="Link">Something Else</div>
            <Link to="/Portfolio/Programming" className='Link'>Programing</Link>
        </nav>
        <Outlet></Outlet>
    </>
  )
}

export default Layout