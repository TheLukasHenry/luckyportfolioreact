import React from 'react'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import Pdf from '../pictures/ResumeLukas.pdf'


export default function LandingButtons() {
    return (
        <Col md="5" className="
        mt-md-2
         landing-buttons"
        >
            <motion.div
                initial={{ x: "120%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, delay: 1.5, type: 'spring' }}
                className="mb-3">
                Greetings. I am a passionate web developer with proficiency in responsive UI / UX design with React, HTML, JavaScript, TypeScript, and CSS.
Intellectually curious professional continually learning and expanding broad skill set.<br />

                In my spare time I also enjoy being in the nature, playing with kids or kicking people in their legs(A.K.A. training kickboxing).

            </motion.div>
            <motion.div
                initial={{ y: "520%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 1.5, type: 'spring' }}
                className="buttons mx-auto my-md-2 mx-md-2">
                <a href="/#projects">
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
