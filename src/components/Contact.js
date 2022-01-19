import React from 'react'
import { Row } from 'reactstrap'
import ContactHeader from './ContactHeader'
import ContactButtons from './ContactButtons'


export default function About() {
    return (

        <Row className="align-items-top landing position-relative">
            <ContactHeader />
            <ContactButtons />
        </Row>
    )
}