import React from 'react'
import { Row, Col } from 'reactstrap'
import ProjectsCard from './ProjectsCard'

export default function Projects() {
    const projects = projectsList

    return (
        <Row
            id="projects"
            className="my-5"
        >
            {projects.map(project => {
                return (
                    <Col md={6} xl={4} className="p-3" key={project.id}>
                        <ProjectsCard  {...project} />
                    </Col>
                )
            }
            )}
        </Row>
    )
}

const projectsList = [
    {
        id: 1,
        h1: 'Sports Search API',
        technology: 'Tech used: Redux, Typescript, React, Reactstrap, React-router-dom, Axios, Node.js, Express, MongoDB, Mongoose, ',
        body: 'I enjoy sports so making this project was fun. I got access to the thesportsdb.com API with the API key to get the data. Originally, I made 4 async-await functions which were getting data and displaying it in the DOM. Those were for the athlete card, league highlights, sports highlights and scores. I made the functions into one big function after making them work. Styling the page was the next step and I used the VanillaTilt.js to add the cool glare effect to bigger screens.',
        codeHref: 'https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/sportAPI',
        siteHref: 'https://luckyportfolio.com/sportAPI/index.html'
    },
    {
        id: 2,
        h1: 'Paradays',
        technology: 'Tech used: Redux, Typescript, React, Reactstrap, React-router-dom, Axios, Node.js, Express, MongoDB, Mongoose, ',
        body: 'This project is a landing page for an imaginary restaurant. I wrote the HTML skeleton for the landing page, form and menu. Styling the page with CSS was the next step. I used JS to open and close navigation menu and switch between menu sections.',
        codeHref: "https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/PProject_restaurant",
        siteHref: "https://luckyportfolio.com/PProject_restaurant/index.html"
    },
    {
        id: 3,
        h1: 'Coral Snake',
        technology: 'Tech used: Redux, Typescript, React, Reactstrap, React-router-dom, Axios, Node.js, Express, MongoDB, Mongoose, ',
        body: 'I used the For loop to make css grid playground. I put all grids into one array and made another array representing the snake. The control function directs the snake from grid to grid. The biggest function is called "move" which starts and restarts the game, it uses Timeout interval to move the snake. It deals with the snake eating food and makes the snake black yellow and red.',
        codeHref: "https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/MySnake",
        siteHref: "https://luckyportfolio.com/MySnake/index.html"
    }
]