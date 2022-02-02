import React from 'react';
const Skills1 = () => {


        return(
            <div className="container-fluid mt-5 ">

                <div className="row">
                    <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="projectsHeader text-center">
                        <h4 className="display-3 d-none d-md-block"id="skillStart">Technical Skills</h4>
                        <h3 className="d-md-none"id="skillStart">Technical Skills</h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <img src={require('../img/sarcasm.jpeg')} alt="test" className="img-fluid sarcasmImg d-none d-md-block"/> 
                    </div>
                </div>
                

            {/* TECHNICAL SKILLS LIST */}
            <div className="skillRow relative">
                <div className="skillsBG"></div>
                <div className="row buffer"></div>
                <div className="row">
                    <div className="col-12 col-md-4 skillColumn">
                        <h2 className="d-none d-md-block">Languages</h2>
                        <h3 className="d-md-none"id="skillStart">Languages</h3>
                        <h4 className="skillsItem" id="smallNoMargin">JavaScript</h4>
                        <h4 className="skillsItem" id="smallNoMargin">Python</h4>
                        <h4 className="skillsItem" id="smallNoMargin">Java</h4>
                        <h4 className="skillsItem" id="smallNoMargin">React</h4>
                        <h4 className="skillsItem" id="smallNoMargin">HTML</h4>
                        <h4 className="skillsItem" id="smallNoMargin">CSS</h4>
                        <div className=" d-md-none">
                            <img src={require('../img/java.png')} alt="java" className="img languageImageSmall"/> 
                            <img src={require('../img/python.png')} alt="python" className="img-fluid languageImageSmall "/> 
                            <img src={require('../img/react.png')} alt="react" className="img-fluid languageImageSmall"/> 
                            <img src={require('../img/JavaScript-logo.png')} alt="react" className="img-fluid languageImageSmall"/> 
                        </div>
                    </div>
                    <div className="col-md-8 skillsImageWrapper">
                        <img src={require('../img/java.png')} alt="java" className="img languageImg d-none d-md-block"/> 
                        <img src={require('../img/python.png')} alt="python" className="img-fluid languageImg d-none d-md-block"/> 
                        <img src={require('../img/react.png')} alt="react" className="img-fluid languageImg d-none d-md-block"/> 
                        <img src={require('../img/JavaScript-logo.png')} alt="react" className="img-fluid languageImg d-none d-md-block"/> 
                    </div>
                </div> 

                 <div className="row ">
                    <div className="col-12 col-md-4 skillColumn">
                        <h2 className="d-none d-md-block">Databases</h2>
                        <h3 className="d-md-none"id="skillStart">Databases</h3>
                        <h4 className="skillsItem" id="smallNoMargin">MySQL</h4>
                        <h4 className="skillsItem" id="smallNoMargin">MongoDB</h4>
                        <div className=" d-md-none">
                            <img src={require('../img/MySQL.png')} alt="java" className="img languageImageSmall bg-light"/> 
                            <img src={require('../img/mongodb.png')} alt="python" className="img-fluid languageImageSmall bg-light"/>  
                        </div>
                    </div>
                    <div className="col-12 col-md-8 skillsImageWrapper">
                                    <img src={require('../img/MySQL.png')} alt="MySQL" className="img-fluid languageImg bg-light d-none d-md-block"/> 
                                    <img src={require('../img/mongodb.png')} alt="MongoDB" className="img-fluid languageImg bg-light d-none d-md-block"/> 
                    </div>
                </div> 
               
                <div className="row ">
                    <div className="col-12 col-md-4 skillColumn">
                        <h2 className="d-none d-md-block">Frameworks/Misc.</h2>
                        <h3 className="d-md-none"id="skillStart">Frameworks/Misc.</h3>
                        <h4 className="skillsItem">Flask</h4>
                        <h4 className="skillsItem">Django</h4>
                        <h4 className="skillsItem">NodeJS</h4>
                        <h4 className="skillsItem">Express</h4>
                        <h4 className="skillsItem">Ajax</h4>
                        <h4 className="skillsItem">CSS</h4>
                        <div className="d-md-none">
                        <img src={require('../img/flask.png')} alt="java" className="img-fluid languageImageSmall bg-light"/> 
                        <img src={require('../img/django2.png')} alt="python" className="img-fluid languageImageSmall"/> 
                        <img src={require('../img/nodejs.png')} alt="react" className="img-fluid languageImageSmall"/> 
                        </div>
                    </div>
                    <div className="col-12 col-md-8 skillsImageWrapper">
                        <img src={require('../img/flask.png')} alt="Flask" className="img-fluid languageImg bg-light d-none d-md-block"/> 
                        <img src={require('../img/django2.png')} alt="Django" className="img-fluid languageImg d-none d-md-block"/> 
                        <img src={require('../img/nodejs.png')} alt="NodeJS" className="img-fluid languageImg d-none d-md-block"/> 
                    </div>
                </div> 
                <div className="row buffer"></div>
                </div>

            <div className="row m-4 " >
                        <div className="col-12">
                            <div className="skillsHeader">
                                <h4 className="display-3 d-none d-md-block"id="skillStart">Professional Skills</h4>
                                <h3 className="d-md-none"id="skillStart">Professional Skills</h3>
                                <img src={require('../img/suit.png')} alt="test" className="img-fluid tuxedoImg m-2 d-none d-md-block"/> 
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                                <div className="skillsWrapper">
                                    <ul>
                                        <li><p className="profSkillsItem">Capable of developing full-stack software applications, knowledgeable of MVC sofware design patterns. </p></li>
                                        <li><p className="profSkillsItem">Experienced with Data Structures, algorithms, and Object-Oriented-Programming.</p></li>
                                        <li><p className="profSkillsItem">A quick learner and adaptable.</p></li>
                                        <li><p className="profSkillsItem">Excellent time management skills, self-starter. </p></li>
                                        <li><p className="profSkillsItem">Advanced problem solving skills. </p></li>
                                    </ul>
                                </div>
                        </div>
                    </div>

            </div>
        )
    }

export default Skills1;