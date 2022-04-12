import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


export default function ProjectsCard(props) {
  const { h1, body, technology, codeHref, siteHref} = props

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const buttonMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  }

  const textOpacity = {
    rest: {
      opacity: 1,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      opacity: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Card body
          outline
          className="project-card h-100 position-relative shadow-sm"
        >
          <CardTitle
            tag="h3"
            className="text-center"
          >
            {h1}
          </CardTitle>

          <motion.div
            className="position-absolute card-tech-text"
            variants={textOpacity}
          >
            {technology}
          </motion.div>

          <motion.div variants={buttonMotion} className="px-4 card_btns">
              <motion.button
              onClick={event =>  window.open(`${codeHref}`, '_blank', 'noopener,noreferrer')}
                className="button my-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Code
              </motion.button>
              <motion.button
              onClick={event =>  window.open(`${siteHref}`, '_blank', 'noopener,noreferrer')}
                className="button my-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Site
              </motion.button>
            <motion.button
              className="button my-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
            >
              About project
            </motion.button>
          </motion.div>
        </Card>
      </motion.div>

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


          <Button
            color="success"
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
    </>
  )
}
