import React from 'react';

const Contact = () => {


        return(
            <div className="row skills d-flex justify-content-center ">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="projectsHeader">
                                <h1 id="skillStart">Technical Skills</h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <img src={require('../img/sarcasm.jpeg')} alt="test" className="img-fluid sarcasmImg"/> 
                        </div>
                    </div>
                    <div className="row skillRow smallBackground mb-5">
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
                    <div className="row m-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img src={require('../img/suit.png')} alt="test" className="img-fluid tuxedoImg"/> 
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="projectsHeader">
                                <h1 id="skillStart">Professional Skills</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="skillColumn">
                                <div className="skillsWrapper">
                                    <ul>
                                        <li><h5 className="profSkillsItem">Capable of developing full-stack software applications, knowledgeable of MVC sofware design patterns. </h5></li>
                                        <li><h5 className="profSkillsItem">Experienced with Data Structures, algorithms, and Object-Oriented-Programming.</h5></li>
                                        <li><h5 className="profSkillsItem">A quick learner and adaptable.</h5></li>
                                        <li><h5 className="profSkillsItem">Excellent time management skills, self-starter. </h5></li>
                                        <li><h5 className="profSkillsItem">Advanced problem solving skills. </h5></li>
                                        <li><h5 className="profSkillsItem"> I can eat a whole bushel of bananas in one sitting. A big one. </h5></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Contact;