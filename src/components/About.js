import React from 'react'
import { Row } from 'reactstrap'
import AboutHeader from './AboutHeader'
import AboutButtons from './AboutButtons'


export default function About() {
    return (

        <Row className="align-items-top landing position-relative overflow-hidden">
            <AboutHeader className="bg-pic" />
            <AboutButtons />
            <div className="position-absolute bg-pic"></div>
        </Row>
    )
}
