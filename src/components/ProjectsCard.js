import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ProjectsCard() {
    return (
      <Card body className="projects-card">
      <CardTitle tag="h3">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button className="m-1">
        Go somewhere
      </Button>
      <Button className="m-1">
        Go somewhere
      </Button>
    </Card>
    )
}
