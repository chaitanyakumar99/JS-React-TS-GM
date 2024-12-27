import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

let App = ()=>{

  return <div>
        <Router>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/index" className="navbar-brand">Logo</Link>
              <div className="ml-auto">
                <ul className="navbar-nav">
                  <li><Link to="/index" className="nav-link">Home</Link></li>
                  <li><Link to="/about" className="nav-link">About</Link></li>
                  <li><Link to="/services" className="nav-link">Services</Link></li>
                  <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
              </div>
            </nav>

            <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
            </Switch>
            
        </Router>
        </div>
}
export default App