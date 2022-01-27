import React from 'react';

const Projects = () => {


        return(
            
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
                            <div className="col-12 col-md-6 leftProject ">
                            <div className="projLeftBG"></div>
                              <img src={require('../img/reviewsource.png')} alt="the review source site" className="projectImg img-fluid mb-3"/>
                                <div className="project-link">
                                        <a href="https://github.com/KNJour/reviewsource" id="portfolio-link" target="_blank">GitHub</a>
                                        <a href="https://reviewsource.site" target="_blank"  id="portfolio-link">Visit The Website</a>
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
                            <div className="col-12 col-md-6 leftProject order-md-12">
                                <div className="projRightBG2"></div>
                                <img src={require('../img/budgetpal.png')} alt="the budget pal site" className="projectImg img-fluid mb-3"/>
                                <div className="project-link">
                                        <a href="https://github.com/KNJour/budgetpal" target="_blank" id="portfolio-link">GitHub</a>
                                        <a href="http://thebudgetpal.com" target="_blank"  id="portfolio-link">Visit The Website</a>
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
                            <div className="col-12 col-md-6 currentProjLeft ">
                                <img src={require('../img/wireframe.jpeg')} alt="test" className="currentProjectImg img-fluid mb-3 d-none d-md-block"/>
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
        )
    }

export default Projects;