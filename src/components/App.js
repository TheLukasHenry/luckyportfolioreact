import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import '../scss/App.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'



function App() {
  return(
    <Router>

      <Header/>
    <Container fluid>
      {/* <CardTest/> */}
      {/* <Landing/> */}

      <Switch>
        <Route exact path="/">
          <Landing/>
          <Projects/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/projects/:id">
          {/* <Landing/> */}
          <Projects/>
        </Route>
      </Switch>
      {/* <About/> */}

    </Container>
      <Footer/>
    </Router>
  )
}

export default App;
