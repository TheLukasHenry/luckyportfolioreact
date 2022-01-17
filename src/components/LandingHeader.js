import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profilePic from '../pictures/profile_picc_short.jpg'

export default function LandingHeader() {
    return (
        <Col
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

        </Col>
    )
}
