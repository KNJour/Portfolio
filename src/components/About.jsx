import React from 'react';

const About = () => {


        return(
            <div>
            <div className="container-fluid contentContainer relative">
            <div className="aboutRowBG"></div>
            <div className="row aboutRow mt-5 mb-5">
                <div className="col-md-6 col-sm-12 aboutLeftCol">
                    <div className="row">
                        <div className="leftSideWrapper justify-content-between mb-3 keepAway">
                            <h2 className="myName ml-3">A little about me:</h2>
                            <div className="description ml-5 d-none d-sm-block">
                                <div className="descriptionWrapper">
                                    <div className="descriptor">Software Developer</div>
                                    <div className="descriptor">Programmer</div>
                                    <div className="descriptor">Cat Person</div>
                                    <div className="descriptor">Basically Steve Jobs</div>
                                </div>
                            </div>
                            <div className="buffer d-none d-lg-block"></div>
                            <div className="aboutMe mb-4 p-2">
                                <p>After spending over 10 years in the service and insurance industries, I've finally transitioned to my life-long dream of <s>spending two hours looking for a typo</s> becoming a software developer. </p>
                                <div className="buffer d-sm-none"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-md-none">   
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <img src={require('../img/michaelscott.png')} alt="test" className="michaelscottSmall img-fluid"/> 
                            
                        </div>
                    </div>

                    <div className="row aboutInfo d-flex text-center align-items-bottom justify-content-center mb-4 ml-1">
                        <div className="col-12">
                            <div className="buffer d-lg-none"></div>
                            <div className=" p-4">
                                <h4 className="smallDark">I am a full-stack software developer and a curious learner. I design modern websites, build fully functional software applications, and have experience making full CRUD applications powered by Python, JavaScript, React, and JAVA that manipulate and store data through MySQL and MongoDB.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <div className="row aboutRight">
                        <img src={require('../img/michaelscott.png')} alt="test" className="michaelscott img-fluid"/> 
                    </div>
                </div>
            </div>
        </div>
        </div>

        );
    }

export default About;