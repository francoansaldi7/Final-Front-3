import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    <hr />
    <div className='container'>
      <div>
      <Link to="/"><img src="./dental.png" alt="Ansaldi Dental Logo" /></Link>
      </div>
    <div className='navDiv'>
      <nav>
        <ul className='ulStyle'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/favs">Favourites</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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