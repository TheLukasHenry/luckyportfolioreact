import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

export default function LandingHeader() {
    return (
        <Col
            md="7"
            className="profile-pic"
        >
            <Container className="header-section ml-md-2">
                <Row>
                    <motion.div
                        className="ml-md-0 mt-5 mb-n4 text-landing landing-h1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        transition={{ duration: 1.5, delay: 0.5 }}

                    >
                        About
                    </motion.div>
                </Row>
                <Row className="mt-n2">
                    <Col className="text-landing p-0" size="6">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >A.K.A. Lukas</motion.div>
                    </Col>
                    <Col className="text-right text-landing p-0" size="6">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >Web Developer</motion.div>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
