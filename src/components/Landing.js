import React from 'react'
import { Row } from 'reactstrap'

import ScrollToTop from './ScrollToTop'
import LandingHeader from './LandingHeader'
import LandingButtons from './LandingButtons'


export default function Landing() {
    return (
<>
        <ScrollToTop/>
            <Row className="align-items-top landing position-relative">
                <LandingHeader/>



                <LandingButtons className="lnd-btn"/>
            <div className="position-absolute bg-pic"></div>
            </Row>
</>

    )
}
