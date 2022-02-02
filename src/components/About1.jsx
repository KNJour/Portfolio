import React from 'react';

const About1 = () => {


        return(
          <div className="container-fluid about-container relative">
          <div className="aboutRowBG"></div>
          <div className="row">
            <div className="col-12 col-sm-6 aboutLeftColumn">
                <div className="leftSideWrapper justify-content-between mb-3 keepAway">
                    <h2 className="myName ml-3">A little about me</h2>
                    <div className="description ml-5">
                        <div className="descriptionWrapper">
                            <div className="descriptor">Software Developer</div>
                            <div className="descriptor">Programmer</div>
                            <div className="descriptor">Cat Person</div>
                            <div className="descriptor">Basically Steve Jobs</div>
                        </div>
                    </div>
                    <div className="aboutMe mb-4 p-2">
                        <p>Thanks for visiting my portfolio, after spending over 10 years in the service and insurance industries, I've finally transitioned to my life-long dream of <s>spending two hours looking for a typo</s> becoming a software developer. </p>
                    </div>
                </div>
                <div className="buffer"></div>
            </div>
            <div className="col-12 col-sm-6 aboutRightColumn">
              <div className="col-md-6 align-items-center justify-content-center">
                      <div className="aboutWrapper p-1">
                          <h4 className="makeWhite">I am a full-stack software developer and an avid learner. I design modern websites, build fully functional software applications, and have experience making full CRUD applications powered by Python, React, and JAVA that manipulate and store data through MySQL and MongoDB.</h4>
                      </div>
                      
                 
              </div>
            </div>
        </div>
      </div>

        );
    }

export default About1;