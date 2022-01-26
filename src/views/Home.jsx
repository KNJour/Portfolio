import React, { useEffect, useState} from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import styled, { keyframes } from 'styled-components';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = props => {

    const [name, setName] = useState("John Doe");
    const bounceAnimation = keyframes`${bounce}`;
    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }
    const changeHandler = e => {
        setName([e.target.value])
    }

    return(
        // CONTAINER START
        <div className="container-fluid main-contain m-0 p-0">
            {/* LOGO AND SUBTITLE */}
            <div className="row headerRow d-flex justify-content-center text-center">
                <div className="title-subtitle-div">
                    <img style={styles.bounce} src={require('../img/keithjournell.png')} alt="test" className="img-fluid logo"/>
                    
                    <h1 className="subtitle">Full-Stack <span className="darkBlue">Software Developer</span></h1>
                </div>
            
            </div>
            {/* LINKS */}
            <div className="row d-flex justify-content-center text-center">
                <div className="myLinks">
                    <a href="https://github.com/KNJour" id="portfolio-link" target="_blank">GitHub</a>
                    <a href="#" id="portfolio-link" target="_blank">Portfolio Code</a>
                    <a href="#projects-start" id="portfolio-link" >Projects</a>
                    <a href="#skillStart" id="portfolio-link">Skills</a>
                    <a href="#" id="portfolio-link" target="_blank">Contact</a>
                </div>
            </div>
            {/* LOGO PORTION FOR LANGUAGES */}
            <div className="row justify-content-center text-center m-2 p-2">
                <img src={require('../img/logoBanner.png')} alt="test" className="img-fluid logoBanner"/>
            </div>
            {/* NEW CONTAINER TEST */}


            {/* END TEEST */}
            <div className="container-fluid contentContainer">
                <div className="row aboutRow mt-5 mb-5">
                    <div className="aboutRowBG"></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="leftSideWrapper justify-content-between">
                                <h2 className="myName">A little about me</h2>
                                <div className="description">
                                    <div className="descriptionWrapper">
                                        <div className="descriptor">Software Developer</div>
                                        <div className="descriptor">Programmer</div>
                                        <div className="descriptor">Basically Steve Jobs</div>
                                        <div className="descriptor">Web Developer</div>
                                    </div>
                                </div>
                                <div className="aboutMe mb-4 p-2">
                                    <p>After a lengthy career in the insurance industry, I decided it wasn't my life's ambition to sell and service commercial insurance. In 2021 I took the leap and invested myself full-time into coding.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row aboutInfo d-flex align-items-center text-center justify-content-center">
                            <div className="projectsWrapper p-4">
                                <h4 className="smallDark">I am a full-stack software developer and an avid learner. I design modern websites, build fully functional software applications, and have experience making full CRUD applications powered by Python, React, and JAVA and manipulating data in MySQL and MongoDB.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="row aboutRight">
                        
                            
                            <img src={require('../img/michaelscott.png')} alt="test" className="michaelscott img-fluid"/> 
                        </div>
                        
                        {/* <img src={require('../img/me.png')} alt="test" className="michaelScott"/> */}

                    </div>
{/*               PROJECTS ROW START */}

                </div>
            </div>
            <Projects/>
        {/* QUALIFICATIONS */}
            <Skills/>
            {/* CONTACT  */}
            <Contact/>
        </div>
        

     
    )

}

export default Home;