import React ,{useState,useEffect}from "react";
import {Link}from  'react-router-dom';

function Home(){
    return (
    <>
        <h1>Home</h1>
        <Link to="/resume">Resume </Link>
        <Link to="/projects">Projects </Link>
    </>
    );
}

export default Home;