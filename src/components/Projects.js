import React from 'react'
import { Row, Col } from 'reactstrap'

import ProjectsCard from './ProjectsCard'

export default function Projects() {
    return (
        <Row>
            <Col md={6} className="p-0">
                <ProjectsCard/>

            </Col>
            <Col md={6} className="p-0">
                <ProjectsCard/>

            </Col>
        </Row>
    )
}
