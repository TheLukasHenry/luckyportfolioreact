import React from 'react'
import { Container, Row, Col } from 'reactstrap'


export default function LandingHeader() {
    return (
        <Col
            md="8"
        >
            <Container className="header-section ml-md-2 text-landing">
                <Row><h1 className="ml-md-0 mt-5 mb-n4 text-landing">Lucky</h1></Row>
                <Row className="h1-text">
                    <Col className="text-landing" size="6"><p>A.K.A. Lukas</p></Col>
                    <Col className="text-right text-landing" size="6"><p>Web Developer</p></Col>
                </Row>
            </Container>
        </Col>
    )
}
