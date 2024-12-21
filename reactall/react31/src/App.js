import React from 'react'
import Navbar from './compenents/Navbar'
import Home from './compenents/Home'
import ContactApp from './contacts/ContactApp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = () => {
   return <React.Fragment>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/index" element={<Home/>}/>
                    <Route path="/contact" element={<ContactApp/>}/>
                </Routes>
            </Router>
        </React.Fragment>
}

export default App