import {useState, useEffect} from 'react'
import { useRef } from 'react';
import {Outlet, Link} from 'react-router-dom'
import MobileNavBar from '../Component/MobileNavBar';
import useScroll from '../Hook/useScroll'

function Layout() {
  const [position, setPosition] = useState(0);
  const prev = useRef(0);
  const Scroll = useScroll();

  const [toggle, setToggle] = useState(false);
  
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
      if(position > prev.current) {
        return 'nav active top-20'
      }
      else if(position <= prev.current) {
        return 'nav active top-0'
      }
    }
    return 'nav'
  }

  function DoToggle() {
    setToggle(e=>!e);
  }

  if(toggle) {
    document.body.style.overflow = "hidden";
  }else if(!toggle) {
    document.body.style.overflow = "scroll";
  }

  return (
    <>
        <nav className={NavChanges()} >
            <Link to="/Portfolio/" className='Home'>Home</Link>
            <div className="Link">Something</div>
            <Link to="/Portfolio/Programming" className='Link'>Programing</Link>
            <div className="Link">Something Else</div>
            {toggle ? 
            <div className='Toggle' onClick={DoToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </div>
            : 
            <div className='Toggle' onClick={DoToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-diamond-fill" viewBox="0 0 16 16">
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
              </svg>
            </div>}
        </nav>
        {toggle && <div className='BackDrop' onClick={DoToggle}></div>}
        {toggle && <MobileNavBar toggle={toggle}/>}
        <Outlet></Outlet>
    </>
  )
}

export default Layout