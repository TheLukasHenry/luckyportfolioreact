import React from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import Projects from '../projects'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ProjectsCard(props) {
  const { h1, body, codeHref, siteHref, id } = props
  // const { id } = useParams()
  return (
    <Card body outline
      className="project-card h-100"
    >


      <CardTitle tag="h3">
        {h1}Project Card details {id}
      </CardTitle>
      <CardText>
        {body}
      </CardText>
      <Link to={siteHref}>Site</Link>
      <Button color="success" href={codeHref} target="_blank" className="m-1">
        Code
      </Button>
      {/* <Link to={`/projects/${id}`}> */}

        <Button color="success"
         href={siteHref} 
         target="_blank" className="m-1" new>
          Site
        </Button>
      {/* </Link> */}
      {/* </CardBody> */}
    </Card>
  )
}
