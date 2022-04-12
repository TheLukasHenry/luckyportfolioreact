import React from 'react'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import Pdf from '../pictures/ResumeLukas.pdf'


export default function LandingButtons() {

    return (
        <Col
            md="4"
            className="
        mt-md-5
         landing-buttons"
        >
            <motion.div
                initial={{ x: "120%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, delay: 1.5, type: 'spring' }}
                className="mb-5">
                Welcome 🤗. My hobby is to daily learn tiny piece of Web Development. Intellectually curious web developer with proficiency in React, JavaScript and CSS.
            </motion.div>
            <motion.div
                initial={{ y: "520%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 1.5, type: 'spring' }}
                className="buttons mx-auto my-md-2 mx-md-2">
                <a href="#projects">
                    <motion.button
                        className="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Projects
                    </motion.button>
                </a>
                <a href={Pdf} target="_blank" rel='noopener noreferrer'>
                    <motion.button
                        className="button my-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Resume
                    </motion.button>
                </a>
            </motion.div>

        </Col>
    )
}
