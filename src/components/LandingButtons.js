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
            <div className="buttons mx-auto my-md-2 mx-md-2">
                <a href="#projects">
                    <motion.button
                    // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            </div>
            <div className="">
            Welcome 🤗. My hobby is to daily learn tiny piece of Web Development. Intellectually curious web developer with proficiency in React, JavaScript and CSS.
            </div>
        </Col>
    )
}
