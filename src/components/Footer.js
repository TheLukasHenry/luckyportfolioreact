import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div>
            <footer className="footer fixed-bottom bg-dark text-dark">
            <div className="container">
                <div className="row">             
                  
                    <div className="col flex-col text-center flex items-center justify-center  ">
                        <a className="px-3 text-white h1" target="_blank" href="https://www.linkedin.com/in/lukasherajt"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                        <a className="px-3 text-white h1" target="_blank" href="https://twitter.com/lherajt"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a>
                        <a className="px-3 text-white h1" target="_blank" href="https://github.com/Lherajt"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
                        <a className="px-3 text-white h1" target="_blank" href="tel:201-640-7892"><FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon></a>
                        <a className="px-3 text-white h1" href="mailto:lherajt@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon></a>
                      
                    </div>
                  
                </div>
            </div>
        </footer>
        </div>
    )
}
