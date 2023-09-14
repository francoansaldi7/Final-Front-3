/* eslint-disable react/prop-types */
import { Link, Outlet } from 'react-router-dom'
import ReactSwitch from "react-switch"

const Navbar = (props) => {
  
  return (
    <>
    <hr />
    <div className='container'>
      <div>
      <Link to="/"><img src="./dental.png" alt="Ansaldi Dental Logo" className='dentalPic'/></Link>
      </div>
    <div className='navDiv'>
      <nav>
        <ul className='ulStyle'>
          <li><Link to="dentists">Dentists</Link></li>
          <li><Link to="/favs">Favorites</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          <ReactSwitch
          onChange={props.handleSwitch}
          checked={props.checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch" />
        </ul>
      </nav>
    </div>
    </div>
    <hr />
    <div className='sectionDiv'>
        <section>
          <Outlet></Outlet>
        </section>
    </div>
    </>
  )
}

export default Navbar