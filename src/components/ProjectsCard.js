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
      <Button>
        Go somewhere
      </Button>
      <Button>
        Go somewhere
      </Button>
    </Card>
    )
}
