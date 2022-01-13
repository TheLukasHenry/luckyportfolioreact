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
                <Col md="6" className="pt-md-5">
                    {/* <ButtonGroup className="m-3 p-3"> */}
                        <Button className="m-3" size="lg">Projects</Button>
                        <Button className="m-3" size="lg">Resume</Button>
                    {/* </ButtonGroup> */}
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur 
                </Col>

            </Row>
        </Container>
    )
}
