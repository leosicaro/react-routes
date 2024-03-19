import React,{useState,useEffect} from "react";
import {Link}from  'react-router-dom';
import {studies, experiences} from '../data/resume';

function Resume(){
    return (<>
    <h1>Resume</h1>
    <h2>Titulaciones</h2>
    {studies.map(study =>(
        <div key={study.id}>
            <h3>{study.title}</h3>
            <h3>Realizado en : {study.institution}</h3>
            <h3>Año: {study.date}</h3>
        </div>
        )
        )
        }
    <h2>Experiencia</h2>
        {experiences.map(experience =>(
        <div key={experience.id}>
            <h3>{experience.title}</h3>
            <h3>En la empresa de : {experience.company}</h3>
            <h3>Año: {experience.date}</h3>
        </div>
        )
        )
        }
    

    <Link to="/">Home </Link>

</>)
}

export default Resume;