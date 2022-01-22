import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ProjectsCard(props) {
  const { h1, body, codeHref, siteHref } = props
  return (
    <Card body outline
      className="project-card h-100"
    >
      {/* <CardBody> */}

        <CardTitle tag="h3">
          {h1}
        </CardTitle>
        <CardText>
          {body}
        </CardText>
        <Button color="success" href={codeHref} target="_blank" className="m-1">
          Code
        </Button>
        <Button color="success" href={siteHref} target="_blank" className="m-1">
          Site
        </Button>
      {/* </CardBody> */}
    </Card>
  )
}
