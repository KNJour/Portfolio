import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = props => {
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
        <div>
        <div className="container-fluid main-contain">
            <div className="row headerRow d-flex justify-content-center text-center align-items-center">
                <div className="col-12 ">
                    <div className="title-subtitle-div">
                        <img  src={require('../img/keithjournell.png')} alt="test" className="img-fluid logo"/>
                        
                        <h1 className="subtitle">Full-Stack <span className="darkBlue">Software Developer</span></h1>
                    </div>
                </div>
            
            </div>
            {/* LINKS */}
            <div className="row d-flex justify-content-center text-center">
                <div className="myLinks">
                    <a href="https://github.com/KNJour" id="portfolio-link" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://github.com/KNJour/Portfolio" id="portfolio-link" target="_blank" rel="noreferrer">Portfolio Code</a>
                    <a href="#projects-start" id="portfolio-link" rel="noreferrer">Projects</a>
                    <a href="#skillStart" id="portfolio-link" rel="noreferrer">Skills</a>
                    <a href="#contactStart" id="portfolio-link" rel="noreferrer">Contact</a>
                </div>
            </div>
            {/* LOGO PORTION FOR LANGUAGES */}
            <div className="row justify-content-center text-center m-2 p-2">
                <img src={require('../img/logoBanner.png')} alt="test" className="img-fluid logoBanner"/>
            </div>
            </div>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            </div>
        

     
    )

}

export default Home;