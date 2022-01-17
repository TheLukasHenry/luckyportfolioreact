import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap'

import LandingHeader from './LandingHeader'
import profilePic from '../pictures/profile_picc_short.jpg'
import LandingButtons from './LandingButtons'
// import {profilePic} from '../pictures/profile_picc_short.jpg'

export default function Landing() {
    return (
        // <Container className="landing" fluid>
            <Row className="align-items-center landing">
                <LandingHeader/>
                {/* <Col
                    md="6"
                    style={{ backgroundImage: `url(${profilePic})` }}
                    className="profile-pic"
                >
                    <Container className="header-section">
                        <Row><h1 className="text-md-left m-0">Lucky</h1></Row>
                        <Row className="h1-text">
                            <Col size="6"><p>A.K.A. Lukas</p></Col>
                            <Col className="text-right" size="6"><p>Web Developer</p></Col>
                        </Row>
                    </Container>

                </Col> */}
                <LandingButtons/>
                {/* <Col md="6" className="">
                    <div className="buttons text-center">
                        <Button color="success" className="m-3 btn" size="lg">Projects</Button>
                        <Button color="success" className="m-3 btn" size="lg">Resume</Button>
                    </div>
                    <div className="">

                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                    </div>
                </Col> */}

            </Row>
        // </Container>
    )
}
