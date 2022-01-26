import React, { useEffect, useState} from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import styled, { keyframes } from 'styled-components';
import Contact from '../components/Contact';

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


                </div>
{/* 
                PROJECTS ROW START */}

                <div className="row d-flex justify-content-center text-center projectRow m-2 p-2">
                    <div className="container-fluid projectsContainer">
                {/* PROJECT ROW HEADER */}
                        <div className="row projectsHeaderRow">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="projectsHeader align-items-center"  id="projects-start">
                                    <h1>Projects</h1>
                                    <h3>Interactive and deployed through AWS</h3>
                                </div>
                            </div>     
                        </div>     
                        {/* REVIEWSOURECE START */}


                        <div className="row m-2 p-2">
                            <div className="col-12 col-md-6 leftProject d-flex align-items-center justify-content-center">
                            <div className="projLeftBG"></div>
                                <img src={require('../img/reviewsource.png')} alt="test" className="projectImg img-fluid mb-3"/>
                                <div className="project-link">
                                        <a href="https://github.com/KNJour/reviewsource" id="portfolio-link" target="_blank">GitHub</a>
                                        <a href="reviewsource.site" target="_blank"  id="portfolio-link">Visit The Website</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 rightProject d-flex align-items-center">
                            <div className="projRightBG"></div>
                            <div className="projectTextWrapper" id="front">
                                    <h2>reviewSource</h2>
                                    <h4>Java - JavaScript - MySQL</h4>
                                    <p id="front">A fully featured Java website that allows users to register and create reviews for movies, books, music, etc. Supports movie search through IMDB. Includes instant Guest Login because who wants to register for some random guy's website anyway?  </p>
                                </div>
                            </div>
                        </div>

                        {/* BUDGETPAL */}
                        <div className="row">
                            <div className="col-12 col-md-6 leftProject d-flex align-items-center justify-content-center order-md-12">
                                <div className="projRightBG2"></div>
                                <img src={require('../img/budgetpal.png')} alt="test" className="projectImg img-fluid mb-3"/>    
                                <div className="project-link">
                                        <a href="https://github.com/KNJour/budgetpal" target="_blank" id="portfolio-link">GitHub</a>
                                        <a href="thebudgetpal.com" target="_blank"  id="portfolio-link">Visit The Website</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 rightProject d-flex align-items-center order-md-1">
                            <div className="projLeftBG2"></div>
                            <div className="projectTextWrapper" id="front">
                                <h2>BudgetPal</h2>
                                <h4>Python - Flask - MySQL</h4>
                                    <p id="front">A simple web application for creating budgets. Can register and account and create budgets with full CRUD functionality. Users can log their spending and budgetpal will let you know if you're on track with your budgets. Built with Python and utilizing the Flask web framework. Also includes a guest login option, and something about bananas. </p>
                                </div>
                            </div>
                        </div>
                     </div>
    
                </div>
            </div>

{/* WORK IN PROGRESS PROJECT SECTION  */}
            <div className="row">
                <div className="container-fluid currentProjectContainer">
                    <div className="projCurrentBG"></div>
                    <div className="row projectsHeaderRow mb-3 p-2">
                            <div className="col-12 d-flex align-items-center">
                                <div className="projectsHeader m-5"  id="currentProject">
                                    <h1>Current Project</h1>
                                </div>
                            </div>     
                        </div>
                        <div className="row m-2 p-1">
                            <div className="col-12 col-md-6 leftProject d-flex align-items-center ">
                                <img src={require('../img/wireframe.jpeg')} alt="test" className="projectImg img-fluid mb-3 d-none d-md-block"/>
                            </div>
                            <div className="col-12 col-md-6 rightCurrentProject d-flex smallChange">
                            <div className="projectTextWrapper makeWhite">
                                    <h2 className="smallDarken">Dungeon Master Tools</h2>
                                    
                                    <p className="smallDarken">A React powered single page web application designed to help dungeon masters (for Dungeons & Dragons) manage combat encounters. Users will create "scenes" which they can populate with everything in an encounter; they will then be able to manage health, turn order, damage, and more! </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
           
            {/* Qualifications */}
            <div className="row skills d-flex justify-content-center text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="projectsHeader">
                                <h1 id="skillStart">Technical Skills</h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src={require('../img/sarcasm.jpeg')} alt="test" className="img-fluid sarcasmImg"/> 
                        </div>
                    </div>
                    <div className="row skillRow smallBackground">
                        <div className="skillsBG"></div>
                        <div className="col-12 col-md-7">
                            <div className="skillColumn">
                                <h3>Languages</h3>
                                    <div className="skillsWrapper">
                                        <h5 className="skillsItem">JavaScript</h5>
                                        <h5 className="skillsItem">Python</h5>
                                        <h5 className="skillsItem">Java</h5>
                                        <h5 className="skillsItem">React</h5>
                                        <h5 className="skillsItem">HTML</h5>
                                        <h5 className="skillsItem">CSS</h5>
                                    </div>
                            </div>
                            <div className="skillColumn">
                                <h3>Databases</h3>
                                    <div className="skillsWrapper">
                                        <h5 className="skillsItem">MySQL</h5>
                                        <h5 className="skillsItem">MongoDB</h5>
                                    </div>
                            </div>
                            <div className="skillColumn">
                                <h3>Frameworks/Misc</h3>
                                <div className="skillsWrapper">
                                    <h5 className="skillsItem">Flask</h5>
                                    <h5 className="skillsItem">Django</h5>
                                    <h5 className="skillsItem">Express</h5>
                                    <h5 className="skillsItem">Node JS</h5>
                                    <h5 className="skillsItem">Ajax</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                                {/* <img src={require('../img/me.png')} alt="test" className="img-fluid mePhoto "/> */}
                            </div>
                    </div>
                </div>
            </div>
            {/* Professional Skills Row  */}
            <div className="row skills d-flex justify-content-center text-center m-2 p-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={require('../img/tuxedopooh.jpeg')} alt="test" className="img-fluid tuxedoImg"/> 
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="projectsHeader">
                                <h1 id="skillStart">Professional Skills</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row skillRow">
                        <div className="col-12 col-md-7">
                            <div className="skillColumn">
                                    <div className="skillsWrapper">
                                        <h5 className="profSkillsItem">Can develop full-stack software applications, knowledgeable of MVC sofware design patterns.  </h5>
                                        <h5 className="profSkillsItem">Extensive experience in customer relations provides insight into product feel and user experience. </h5>
                                        <h5 className="profSkillsItem">Quick Learner. Adaptable.</h5>
                                        <h5 className="profSkillsItem"> Excellent communication skills across a variety of professional environments.</h5>
                                        <h5 className="profSkillsItem">Time management skills, self-starter. </h5>
                                        <h5 className="profSkillsItem">Advanced problem solving skills. </h5>
                                        <h5 className="profSkillsItem"> I can eat a whole bushel of bananas in one sitting. Like, a big one. </h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                                
                            </div>
                    </div>
                </div>
            </div>

            {/* CONTACT  */}
            {/* NEW TEST */}
            {/* LOGO PORTION FOR LANGUAGES */}
            
            <Contact/>
        </div>
        

     
    )

}

export default Home;