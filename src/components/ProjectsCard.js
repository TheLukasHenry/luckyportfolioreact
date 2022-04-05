import React, { useState } from 'react'

import { Card, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, CloseButton } from 'reactstrap'


export default function ProjectsCard(props) {
  const { h1, body, technology, codeHref, siteHref, id } = props

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <Card body outline
      className="project-card h-100 position-relative"
    >


      <CardTitle tag="h3">
        {h1}
      </CardTitle>
      <CardText className="mb-auto position-absolute project-description">
      {technology}

      </CardText>

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
          {technology}
          </ModalBody>
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
