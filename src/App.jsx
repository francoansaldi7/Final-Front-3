import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from './routes/Home'
import Contact from './routes/Contact'
import Detail from './routes/Detail'
import Favs from './routes/Favs'
import Location from './routes/Location'
import AboutUs from './routes/AboutUs'
import Dentists from './routes/Dentists'
import ProductsAndServices from './routes/ProductsAndServices'
import Blog from './routes/Blog'
import Testimonies from './routes/Testimonies'
import WorkTogether from './routes/WorkTogether'
import Donation from './routes/Donation'
import BuyEquipment from './routes/BuyEquipment'
import TermsAndConditions from './routes/TermsAndConditions'
import PrivacyPolicy from './routes/PrivacyPolicy'
import Security from './routes/Security'
import Cookies from './routes/Cookies'

function App() {

  const [contextTheme, setContextTheme] = useState('true')
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme( (state) => (state === 'Dark' ? 'Light' : 'Dark'))
      setChecked(nextChecked);
  }

  return (
      <div className="App" id={contextTheme}>
          <Routes>
            <Route path="/" element={<Navbar handleSwitch={handleSwitch} checked={checked}/>}>
              <Route index element={<Home />} />
              <Route path='/dentists' element={<Dentists />} />
              <Route path='/favs' element={<Favs />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/worktogether' element={<WorkTogether />} />
              <Route path='/donations' element={<Donation />} />
              <Route path='/equipment' element={<BuyEquipment />} />
              <Route path='/locations' element={<Location />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/testimonies' element={<Testimonies />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/products&services' element={<ProductsAndServices />} />
              <Route path='/terms' element={<TermsAndConditions />} />
              <Route path='/privacy' element={<PrivacyPolicy />} />
              <Route path='/security' element={<Security />} />
              <Route path='/cookie' element={<Cookies />} />
            </Route>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;