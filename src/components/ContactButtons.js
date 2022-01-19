import React from 'react'
import { Col, Button } from 'reactstrap'


export default function LandingButtons() {
    return (
        <Col md="4" className="
        mt-n5
        mt-md-5
        
         landing-buttons"
         >
         {/* col working classes:  offset-md-8, position-absolute, */}
            <div className="buttons mx-auto m-md-2 mt-n5">
                <Button block color="success" className="btn my-0" size="lg">Projects</Button>
                <Button block color="success" className="btn my-4" size="lg">Resume</Button>
            </div>
            <div className="">

                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            </div>
        </Col>
    )
}
