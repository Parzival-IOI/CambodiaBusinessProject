import {useState, useEffect} from 'react'
import { useRef } from 'react';
import {Outlet, NavLink} from 'react-router-dom'
import useScroll from '../Hook/useScroll'
import Profile1 from '../Asset/Profile.jpg'

function Layout() {
  const [position, setPosition] = useState(0);
  const prev = useRef(0);
  const Scroll = useScroll();

  const [toggle, setToggle] = useState(false);
  
  const ref = useRef(null);

  const [width, setWidth] = useState(null);

  useEffect(()=> {
      setPosition(Scroll);
  }, [Scroll])
  useEffect(()=>{
      prev.current = position;
  },[position]);

  function NavChanges () {
    if(position <= 100) {
      return 'nav';
    }
    else if(position > 100){
      if(position > prev.current) {
        return 'nav activeNav top-20'
      }
      else if(position <= prev.current) {
        return 'nav activeNav top-0'
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

  

  useEffect(()=>{
    function GetWidth() {
      setWidth(ref.current.offsetWidth);
    }
    window.addEventListener('resize', GetWidth);
    return ()=> {return (window.removeEventListener('resize', GetWidth))}
  }, []);
  if(width > 767) {
    document.body.style.overflow = "scroll";
  }

  function BackToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
        <nav className={NavChanges()} style={toggle ? {'backgroundColor' : 'transparent'} : null} ref={ref}>
            <NavLink to="/Portfolio/" className={`Home ${isActive => {return isActive ? 'active' : null}}`}><img src={Profile1} alt="Profile" width='100%' height='100%' loading='lazy'/></NavLink>
            <NavLink to="/Portfolio/Programming" className='Link'>Programing</NavLink>
            <NavLink to='/Portfolio/About' className="Link">About</NavLink>
            <NavLink to="/Portfolio/Contact" className="Link">Contact</NavLink>
            {toggle ? 
            <div className='Toggle' onClick={DoToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </div>
            : 
            <div className='Toggle' onClick={DoToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-diamond-fill" viewBox="0 0 16 16">
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
              </svg>
            </div>}
        </nav>
        {toggle && <div className='BackDrop' onClick={DoToggle} ></div>}
        <div className='MobileNav' style={toggle ? {'right' : '0vw'} : {'right' : '-80vw'}} id='slider'>
          <div className='SideBar'>
            <NavLink to='/Portfolio/' className="Link">Home</NavLink>
            <NavLink to='/Portfolio/Programming' className="Link">Program</NavLink>
            <NavLink to='/Portfolio/About' className="Link">About</NavLink>
            <NavLink to="/Portfolio/Contact" className="Link">Contact</NavLink>
          </div>
        </div>
        <button onClick={BackToTop} className={position < 300 ? "backToTop" : "backToTop B2"}><svg xmlns="http://www.w3.org/2000/svg" /*width="16" height="16"*/ fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg></button>
        <Outlet></Outlet>
    </>
  )
}

export default Layout