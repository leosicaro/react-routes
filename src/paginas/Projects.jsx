import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import projects from '../data/projects';


function Projects() {

    return (
        <>
            <h1>Projects </h1>
            {projects.map(project => (
                <div key={project.id}>
                    <h3>{project.name} </h3>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description} </p>
                    <Link to={project.url}>ver</Link>


                </div>
            ))}
            <Link to={'/'}>HOME</Link>

        </>
    );
}

export default Projects;