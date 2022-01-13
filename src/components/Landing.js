import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap'
import profilePic from '../pictures/profile_picc_short.jpg'
// import {profilePic} from '../pictures/profile_picc_short.jpg'

export default function Landing() {
    return (
        <Container className="landing" fluid>
            <Row className="align-items-center">
                <Col
                 md="6"
                  style={{ backgroundImage: `url(${profilePic})` }}
                   className="profile-pic" 
                   >
                
                    <h1>Lucky</h1>
                    <h3>A.K.A. Lukas</h3>
                    <h3>Web Developer</h3>
                </Col>
                <Col md="6" className="">
                    <div className="buttons text-center">
                        <Button className="m-3 btn" size="lg">Projects</Button>
                        <Button className="m-3 btn" size="lg">Resume</Button>
                    </div>
                    <div className="">

                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur 
                    </div>
                </Col>

            </Row>
        </Container>
    )
}
