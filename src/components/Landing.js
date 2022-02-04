import React from 'react'
import { Row } from 'reactstrap'


import LandingHeader from './LandingHeader'
import LandingButtons from './LandingButtons'


export default function Landing() {
    return (

            <Row className="align-items-top landing position-relative">
                <LandingHeader/>

                <LandingButtons className=""/>


            </Row>

    )
}
