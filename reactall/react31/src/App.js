import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
        <Router>
                <Navbar/>
                  <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/services" element={<Services/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  </Routes>
        </Router>
    </div>
  )
}

export default App