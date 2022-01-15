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

                    <h1 className="text-center text-md-left">Lucky</h1>
                    <div className="d-flex flex-column flex-md-row justify-content-md-between">

                        <h3 className="text-center">A.K.A. Lukas</h3>
                        <h3 className="text-center">Web Developer</h3>
                    </div>
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
