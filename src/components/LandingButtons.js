import React from 'react'
import { Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pdf from '../pictures/Lucky-resume-final.pdf'


export default function LandingButtons() {
    return (
        <Col md="4" className="
        mt-md-5
        
         landing-buttons"
         >
         {/* col working classes:  offset-md-8, position-absolute, */}
            <div className="buttons mx-auto my-md-2">

            {/* <Link className="my-0"
             to="/projects" */}
             {/* > */}
             <Button href="#projects" block color="success" className="" size="lg">
                 Projects
                 </Button>
                 {/* </Link> */}

                
                <Button block color="success" className="btn my-4" size="lg" href={Pdf} target="_blank" rel='noopener noreferrer'>Resume</Button>
            </div>
            <div className="">

                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            </div>
        </Col>
    )
}
