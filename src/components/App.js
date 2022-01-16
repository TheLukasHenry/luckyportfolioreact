import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../scss/App.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'

import CardTest from './CardTest'

function App() {
  return(
    <Router>

    <div>
      <Header/>
      {/* <CardTest/> */}
      {/* <Landing/> */}

      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
      {/* <About/> */}

      <Footer/>
    </div>
    </Router>
  )
}

export default App;
