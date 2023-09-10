import { useState } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ReactSwitch from "react-switch"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Detail from './routes/Detail'
import Favs from './routes/Favs'
import './App.css'


function App() {

  const [contextTheme, setContextTheme] = useState(true)
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme( (state) => (state === 'Dark' ? 'Light' : 'Dark'))
      setChecked(nextChecked);
  }

  return (
      <div className="App" id={contextTheme}>
          <div className="switch">
          <p>Switch to change mode</p> 
          <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
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
          </div>

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/favs' element={<Favs />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/worktogether' element={<Home />} />
              <Route path='/investments' element={<Home />} />
              <Route path='/equipment' element={<Home />} />
              <Route path='/locations' element={<Home />} />
              <Route path='/blog' element={<Home />} />
              <Route path='/testimonies' element={<Home />} />
              <Route path='/about' element={<Home />} />
              <Route path='/products&services' element={<Home />} />
              <Route path='/terms' element={<Home />} />
              <Route path='/privacy' element={<Home />} />
              <Route path='/security' element={<Home />} />
              <Route path='/cookie' element={<Home />} />
            </Route>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;