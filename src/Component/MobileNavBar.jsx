
import { useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

const MobileNavBar = ({toggle}) => {


  const[travel, setTravel] = useState('MobileNav')

  useEffect(()=> {
    

    return ()=>{return setTravel('MobileNav Travel2')}
  },[]);

  return (
    <div className={travel}>
      <div className='SideBar'>
        <Link to='/Portfolio/'>Home</Link>
        <Link to='/Portfolio/Program' >Program</Link>
        <a href="ds">Contact</a>
        <a href="dsf">About</a>
      </div>
    </div>
  )
}

export default MobileNavBar