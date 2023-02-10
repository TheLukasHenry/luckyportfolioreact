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
        h1: 'E-commerce headless frontend',
        technology: 'Typescript, React (Custom hooks), Next.js, Tailwind, PostCSS, Graphql and REST API',
        body: 'I used Next.js to enhance the SEO for the new front end, implemented payment gateway, cart, customer authorization. I built custom hooks to simplify API calls. I wireframed and implemented responsive design by writing css modules for each component with help of PostCSS and Tailwind.',
        codeHref: "https://github.com/lukasHerajt/uswholesalevapor",
        siteHref: "https://uswholesalevapor.vercel.app/"
    },
    {
        id: 2,
        h1: 'QA-app',
        technology: 'Tech used: Typescript, React, Graphql, Reactstrap, React-router-dom',
        body: 'Questions and answers app for our testing team. Build with React and Typescript. Stateful data kept in useReducer hook. Created queries for our Graphql database. I build custom hooks for our Graphql queries. ',
        codeHref: 'https://github.com/Lherajt/HireTalk-QA-ui',
        siteHref: ''
    },

    {
        id: 3,
        h1: 'Sports Search API',
        technology: 'Tech used: Javascript, async/await, fetch, JSON, HTML, CSS',
        body: 'I enjoy sports so making this project was fun. I got access to the thesportsdb.com API with the API key to get the data. Originally, I made 4 async-await functions which were getting data and displaying it in the DOM. Those were for the athlete card, league highlights, sports highlights and scores. I made the functions into one big function after making them work. Styling the page was the next step and I used the VanillaTilt.js to add the cool glare effect to bigger screens.',
        codeHref: 'https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/sportAPI',
        siteHref: 'https://luckyportfolio.com/sportAPI/index.html'
    },
    {
        id: 4,
        h1: 'Paradays',
        technology: 'JavaScript, HTML, CSS',
        body: 'This project is a landing page for an imaginary restaurant. I wrote the HTML skeleton for the landing page, form and menu. Styling the page with CSS was the next step. I used JS to open and close navigation menu and switch between menu sections.',
        codeHref: "https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/PProject_restaurant",
        siteHref: "https://luckyportfolio.com/PProject_restaurant/index.html"
    }
]