import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap'

import LandingHeader from './LandingHeader'
import profilePic from '../pictures/profile_picc_short.jpg'
import LandingButtons from './LandingButtons'
// import {profilePic} from '../pictures/profile_picc_short.jpg'

export default function Landing() {
    return (

            <Row className="align-items-top landing position-relative">
                <LandingHeader/>

                <LandingButtons className=""/>


            </Row>

    )
}
