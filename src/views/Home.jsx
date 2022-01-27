import React, { useEffect, useState} from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import styled, { keyframes } from 'styled-components';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = props => {
    // TEST STUFF THAT I WILL USE EVENTUALLY MAYBE
    const bounceAnimation = keyframes`${bounce}`;
    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }


    return(
        // CONTAINER START
        <div className="container-fluid main-contain m-0 p-0">
            <div className="row headerRow d-flex justify-content-center text-center">
                <div className="col-12">
                <div className="title-subtitle-div">
                    <img  src={require('../img/keithjournell.png')} alt="test" className="img-fluid logo"/>
                    
                    <h1 className="subtitle">Full-Stack <span className="darkBlue">Software Developer</span></h1>
                </div>
                </div>
            
            </div>
            {/* LINKS */}
            <div className="row d-flex justify-content-center text-center">
                <div className="myLinks">
                    <a href="https://github.com/KNJour" id="portfolio-link" target="_blank">GitHub</a>
                    <a href="https://github.com/KNJour/Portfolio" id="portfolio-link" target="_blank">Portfolio Code</a>
                    <a href="#projects-start" id="portfolio-link" >Projects</a>
                    <a href="#skillStart" id="portfolio-link">Skills</a>
                    <a href="#contactStart" id="portfolio-link">Contact</a>
                </div>
            </div>
            {/* LOGO PORTION FOR LANGUAGES */}
            <div className="row justify-content-center text-center m-2 p-2">
                <img src={require('../img/logoBanner.png')} alt="test" className="img-fluid logoBanner"/>
            </div>

            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
        

     
    )

}

export default Home;