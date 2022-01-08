import React from 'react'
import '../scss/App.scss'
import 'bootstrap/dist/css/bootstrap.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Footer from './Footer'
import CardTest from './CardTest'

function App() {
  return(
    <>
    <Header/>
    <CardTest/>
    <Footer/>
    </>
  )
}

export default App;
