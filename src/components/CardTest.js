import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css';

export default function CardTest() {
    return (
        <div>
  <Card
    color="light"
    inverse
  >
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</div>
    )
}
