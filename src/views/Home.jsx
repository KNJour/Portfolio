import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const TestHome = props => {
    // TEST STUFF THAT I WILL USE EVENTUALLY MAYBE
    // const bounceAnimation = keyframes`${bounce}`;
    // const styles = {
    //     bounce: {
    //         animation: 'x 1s',
    //         animationName: Radium.keyframes(bounce, 'bounce')
    //     }
    // }


    return(
        // CONTAINER START
        <div className="mainContain">
            <div className="container-fluid header-container">
                <div className="row headerRow">
                <div className="col-12 title-subtitle-div">
                        <img  src={require('../img/keithjournell.png')} alt="Keith Journell" className="img-fluid logo"/>
                        <h2 className="d-none d-sm-block">Full-Stack <span className="darkBlue">Software Developer</span></h2>
                        <h3 className="subtitle d-sm-none">Full-Stack <span className="darkBlue">Software Developer</span></h3>
                </div>
            
                </div>
                      {/* LINKS */}
                <div className="row">
                    <div className="col-12 p-0 d-flex mt-2 text-center justify-content-center">
                        <h4><a href="https://github.com/KNJour" id="portfolio-link" target="_blank" rel="noreferrer" className="smallBegone m-1">GitHub</a></h4>
                        <h4><a href="https://github.com/KNJour/Portfolio" id="portfolio-link" className="smallBegone" target="_blank" rel="noreferrer">Portfolio Code</a></h4>
                            {/* WHEN SMALL */}
                            <h5><a href="https://github.com/KNJour" className="d-md-none"id="portfolio-link" target="_blank" rel="noreferrer">GitHub</a></h5>
                            <h5><a href="https://github.com/KNJour/Portfolio" className="d-md-none" id="portfolio-link" target="_blank" rel="noreferrer">Portfolio Code</a></h5>
                        <h4><a href="#projects-start" id="portfolio-link" rel="noreferrer" className="smallBegone">Projects</a></h4>
                        <h4><a href="#skillStart" id="portfolio-link" rel="noreferrer" className="smallBegone">Skills</a></h4>
                        <h4><a href="#contactStart" id="portfolio-link" rel="noreferrer" className="smallBegone">Contact</a></h4>
                    </div>  
                    {/* BELOW 768px this appears */}
                    <div className="col-12 p-0 d-flex align-items-center text-center justify-content-center d-xs-block d-md-none">
                        <h5><a href="#projects-start" id="portfolio-link" rel="noreferrer">Projects</a></h5>
                        <h5><a href="#skillStart" id="portfolio-link" rel="noreferrer">Skills</a></h5>
                        <h5><a href="#contactStart" id="portfolio-link" rel="noreferrer">Contact</a></h5>
                    </div>
                 {/* LOGO PORTION FOR LANGUAGES */}
                </div>
                <div className="row mb-3">
                    <div className="col-12 p-0 d-flex align-items-center justify-content-center">
                            <img src={require('../img/logoBanner.png')} alt="test" className="img-fluid logoBanner"/>
                    </div>
                </div>
            
            </div>
            <About/> 
            <Projects/>
            <Skills/>
            <Contact/> 
            </div>
        

     
    )

}

export default TestHome;