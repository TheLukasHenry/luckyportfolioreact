import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import '../scss/App.scss'
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import About from './About'
import Projects from './Projects'



function App() {
  return(
    <Router >
      <Header/>
    <Container fluid>
      <Switch>
        <Route exact path="/">
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
