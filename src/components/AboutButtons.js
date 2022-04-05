import React from 'react'
import { Col, Button } from 'reactstrap'


export default function LandingButtons() {
    return (
        <Col md="5" className="
        mt-md-5
        
         landing-buttons"
        >

            <div className="mb-5">

              

Greetings. How I got to programming? I taught English and then I served in a restaurant.<br/>

Serving hasn't been fulfilling for me so I decided to challenge myself to learn how to make websites with HTML, CSS and JavaScript. The more I learn the more I find myself lost in time figuring out how to make things work. It became my hobby and now I want to do it for living.<br/>

In my spare time I also enjoy being in the nature, playing with kids or kicking people in their legs(A.K.A. training kickboxing).

            </div>
            <div className="buttons mx-auto my-md-2">
                <Button block color="success" className="btn my-0" size="lg">Projects</Button>
                <Button block color="success" className="btn my-4" size="lg">Resume</Button>
            </div>

        </Col>
    )
}
