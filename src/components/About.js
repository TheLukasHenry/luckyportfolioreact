import React from 'react'
import { Row } from 'reactstrap'
import AboutHeader from './AboutHeader'
import AboutButtons from './AboutButtons'


export default function About() {
    return (

        <Row className="align-items-top landing position-relative">
            <AboutHeader />
            <AboutButtons />
        </Row>
    )
}
