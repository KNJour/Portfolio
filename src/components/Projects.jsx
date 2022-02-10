import React from 'react';

const Projects = () => {


        return(
            <div className="container-fluid">
                {/* HEADER ROW */}
                <div className="row projectsHeaderRow ">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="projectsHeader text-center"  id="projects-start">
                            <h4 className="display-3 d-none d-sm-block"id="skillStart">Projects</h4>
                            <h3 className="d-none d-sm-block">Interactive and deployed through AWS</h3>
                            {/* When Small text change */}
                                <h2 className="d-sm-none"id="skillStart">Projects</h2>
                                <h5 className="d-sm-none">Interactive and deployed through AWS</h5>
                        </div>
                    </div>     
                </div>
                      {/* REVIEWSOURECE START */}
                <div className="row m-2 p-2">
                    <div className="col-12 col-md-6 leftProject ">
                        <div className="projLeftBG"></div>
                        <img src={require('../img/reviewsource.png')} alt="the review source site" className="projectImg img-fluid mb-3 d-none d-md-block"/>
                        <img src={require('../img/reviewsource.png')} alt="the reviewSource site" className="projectImgSmall img-fluid mb-3 d-md-none"/>
                        <div className="projectLinks">
                                <a href="https://github.com/KNJour/reviewsource" id="project-link" target="_blank" rel="noreferrer">GitHub</a>
                                <a href="https://reviewsource.site" target="_blank" rel="noreferrer" id="project-link" class="d-none d-md-block">Visit The Website</a>
                                <a href="https://reviewsource.site" target="_blank" rel="noreferrer" id="project-link" class="d-md-none">Website</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 rightProject d-flex align-items-center">
                    <div className="projRightBG"></div>
                        <div className="projectTextWrapper text-center" id="front">
                            <h2>reviewSource</h2>
                            <h4>Java - JavaScript - MySQL</h4>
                            <p id="front">A fully featured Java website that allows users to register and create reviews for movies, books, music, etc. Supports movie search through IMDB. Includes instant Guest Login because who wants to register for some random guy's website anyway?  </p>
                        </div>
                    </div>
                </div>
                        <div className="row d-flex align-items-center justify-content-center m-2">
                            <div className="col-4 line"></div>
                        </div>
                {/* BUDGGETPAL SECTION */}
                <div className="row p-2">
                    <div className="col-12 col-md-6 leftProject order-md-12 pr-1">
                        <div className="projRightBG2"></div>
                        <img src={require('../img/budgetpal.png')} alt="the budget pal site" className="projectImg img-fluid mb-3 d-none d-md-block"/>
                        <img src={require('../img/budgetpal.png')} alt="the budget pal site" className="projectImgSmall img-fluid mb-3 d-md-none"/>
                        <div className="projectLinks">
                                <a href="https://github.com/KNJour/budgetpal" target="_blank" id="project-link" rel="noreferrer">GitHub</a>
                                <a href="http://thebudgetpal.com" target="_blank"  id="project-link" rel="noreferrer" class="d-none d-md-block">Visit The Website</a>
                                <a href="http://thebudgetpal.com" target="_blank"  id="project-link" rel="noreferrer" class="d-md-none">Visit The Website</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 rightProject d-flex align-items-center order-md-1">
                    <div className="projLeftBG2"></div>
                    <div className="projectTextWrapper text-center" id="front">
                        <h2>BudgetPal</h2>
                        <h4>Python - Flask - MySQL</h4>
                            <p id="front">A simple web application for creating budgets. Can register and account and create budgets with full CRUD functionality. Users can log their spending and budgetpal will let you know if you're on track with your budgets. Built with Python and utilizing the Flask web framework. Also includes a guest login option, and something about bananas. </p>
                        </div>
                    </div>
                </div>
                            <div className="row d-flex align-items-center justify-content-center m-2">
                                <div className="col-4 line"></div>
                            </div>
                {/* pirateFootballManager START */}
                <div className="row m-2 p-2">
                    <div className="col-12 col-md-6 leftProject ">
                        <div className="projLeftBG"></div>
                        <img src={require('../img/pirate.jpeg')} alt="the review source site" className="projectImg img-fluid mb-3 d-none d-md-block"/>
                        <img src={require('../img/pirate.jpeg')} alt="the review source site" className="projectImgSmall img-fluid mb-3 d-md-none"/>
                        <div className="projectLinks">
                                <a href="https://github.com/KNJour/Pirate-Football-Manager" id="project-link" target="_blank" rel="noreferrer">GitHub</a>
                                
                        </div>
                    </div>
                    <div className="col-12 col-md-6 rightProject d-flex align-items-center">
                    <div className="projRightBG"></div>
                        <div className="projectTextWrapper text-center" id="front">
                            <h2>Pirate Football Manager</h2>
                            <h4>React - Express - MongoDB - NodeJS</h4>
                            <h5>Deployment Coming Soon</h5>
                            <p id="front">A full-stack MERN project designed to demonstrate functional knowledge of React and Props. Users can create pirates with full CRUD functionality. There is no football... yet?</p>
                        </div>
                    </div>
                </div>
                <div className="row relative ">
                    <div className="projCurrentBG"></div>
                    <div className="col-12 smallCurrentProject">
                        <div className="row projectsHeaderRow mb-3 p-2">
                            <div className="col-12 d-flex align-items-center">
                                <div className="projectsHeader m-5"  id="currentProject">
                                <h4 className="display-4 makeWhite"id="skillStart">Current Project</h4>
                                </div>
                            </div>     
                        </div>
                        <div className="row m-2 p-1">
                                <div className="col-12 col-md-6 currentProjLeft ">
                                    <img src={require('../img/wireframe.jpeg')} alt="test" className="currentProjectImg img-fluid mb-3 d-none d-md-block"/>
                                    <img src={require('../img/wireframe.jpeg')} alt="test" className="projectImgSmall img-fluid mb-3 d-md-none"/>
                                </div>
                                <div className="col-12 col-md-6 rightCurrentProject d-flex smallChange">
                                <div className="projectTextWrapper makeWhite text-center">
                                        <h2>Dungeon Master Tools</h2>
                                        
                                        <p>A React powered single page web application designed to help dungeon masters (for Dungeons & Dragons) manage combat encounters. Users will create "scenes" which they can populate with everything in an encounter; they will then be able to manage health, turn order, damage, and more! </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row buffer"></div>
                    </div>
                </div>
</div>
        )
    }

export default Projects;