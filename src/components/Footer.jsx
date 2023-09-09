import fb from '../assets/fbLogo.svg'
import twitter from '../assets/twLogo.svg'
import linkedin from '../assets/lkdnLogo.svg'
import instagram from '../assets/igLogo.svg'
import whatsapp from '../assets/wppLogo.svg'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <>
    <hr></hr>
    <div className="footer">
      <div className="sb__footer section__padding"></div>
      <div className="sb__footer-links">
      <div className='footerLogo'><Link to="/"><img src="./dental.png" alt="Ansaldi Dental Logo" /></Link></div>
      <div className="sb__footer-links_div">
        <h4>For Business</h4>
        <Link to="/worktogether"><p>Hire a Team</p></Link>
        <Link to="/investments"><p>Invest with us</p></Link>
        <Link to="/equipment"><p>Buy equipment</p></Link>
      </div>

      <div className="sb__footer-links_div">
        <h4>Resources</h4>
        <Link to="/locations"><p>Locations</p></Link>
        <Link to="/blog"><p>Blog</p></Link>
        <Link to="/testimonies"><p>Users Testimonies</p></Link>
      </div>

      <div className="sb__footer-links_div">
        <h4>Company</h4>
        <Link to="/about"><p>About Us</p></Link>
        <Link to="/products&services"><p>Products & Services</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      </div>

      <div className="sb__footer-links_div">
        <h4>Social Media</h4>
        <div className="socialmedia">
          <p><Link to="https://es-la.facebook.com/cooldental.nl/photos/" target='blank'><img src={fb} alt="Facebook" /></Link></p>
          <p><Link to="https://twitter.com/dentistry?lang=es" target='blank'><img src={twitter} alt="Twitter" /></Link></p>
          <p><Link to="https://www.linkedin.com/company/dental-clinic/" target='blank'><img src={linkedin} alt="LinkedIn" /></Link></p>
          <p><Link to="https://www.instagram.com/dental_clinics/?hl=es-la" target='blank'><img src={instagram} alt="Instagram" /></Link></p>
          <p><Link to="https://web.whatsapp.com/" target='blank'><img src={whatsapp} alt="whatsapp" /></Link></p>
      </div>
      </div>
    </div>

    <hr></hr>
    <div className='sb__footer-below'>
      
    <div className='sb__footer-copyright'>
      <p>
        @{new Date().getFullYear()} Ansaldi Dental Clinic. All rights reserved.
      </p>
    </div>

    <div className='sb__footer-below-links'>
      <Link to="/terms"><p>Terms & Conditions</p></Link>
      <Link to="/privacy"><p>Privacy</p></Link>
      <Link to="/security"><p>Security</p></Link>
      <Link to="/cookie"><p>Cookie Declaration</p></Link>
    </div>

    </div>
    </div>
    </>
  )
}

export default Footer