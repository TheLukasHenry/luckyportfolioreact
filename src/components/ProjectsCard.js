import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import { Card, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, CloseButton } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import Projects from '../projects'
// import 'bootstrap/dist/css/bootstrap.css';

export default function ProjectsCard(props) {
  const { h1, body, codeHref, siteHref, id } = props

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  // const { id } = useParams()
  return (
    <Card body outline
      className="project-card h-100"
    >


      <CardTitle tag="h3">
        {h1}, id: {id}
      </CardTitle>
      {/* <CardText className="mb-auto">
        {body}
      </CardText> */}

      <Button 
      color="success" 
      href={codeHref} 
      target="_blank" 
      className="m-2"
      
      >
        Code
      </Button>


      <Button color="success"
        href={siteHref}
        target="_blank" 
        className="m-2"
        new
        >
        Site
      </Button>







        <Button
          color="success"
          className="m-2"
          onClick={toggle}
        >
          About project
        </Button>
        <Modal
          centered
          fullscreen="lg"
          size="xl"
          toggle={toggle}
          isOpen={show}
          modalTransition={{ timeout: 500 }}
        >
          <ModalHeader toggle={toggle}>

            {h1}
          </ModalHeader>
          <ModalBody>
            {body}
          </ModalBody>
          <ModalFooter>
            <Button 
            color="success" 
            href={codeHref}  
            target="_blank" 
            className="m-1"
            onClick={toggle}
            
            >
              Code
            </Button>


            <Button color="success"
              href={siteHref}
              target="_blank" 
              className="m-1" 
              new
              onClick={toggle}
              >
              Site
            </Button>
          
          </ModalFooter>
        </Modal>


    </Card>
  )
}
