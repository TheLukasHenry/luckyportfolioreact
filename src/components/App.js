import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import '../scss/App.scss'


import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import About from './About'
import ScrollToTop from './ScrollToTop'

import Projects from './Projects'



function App() {
  return(
    <Router >

      <Header/>
    <Container fluid>


      <Switch>
      {/* Need to figure out how to scroll to the top on press of home icon */}
        <Route exact path="/">
        <ScrollToTop/>
          <Landing/>
          <Projects/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>

        <Route path="/projects">
        <Landing/>

          <Projects/>
        </Route>
      </Switch>


    </Container>
      <Footer/>
    </Router>
  )
}

export default App;
