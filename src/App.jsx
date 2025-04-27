import { useEffect, useState } from "react";
import "./App.css";

import hero from "./assets/hero-bg.jpg";
import samurai from "./assets/samurai.png";
import samuraiAbout from "./assets/samurai-about.png";
// import cloud from "./assets/cloud.png";
// import cloud1 from "./assets/cloud1.png";
// import cloud2 from "./assets/cloud2.png";
// import cloud3 from "./assets/cloud3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const allImages = [hero, samurai];

    allImages.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
    });
  }, []);

  useEffect(() => {
    const allImages = [hero, samurai];
    if (loadedImagesCount === allImages.length) {
      setImagesLoaded(true);
      console.log('images loaded');
    }
  }, [loadedImagesCount]);

  return (
    <div className="main-cont">
      {!imagesLoaded ? (
        <div className="loading-screen">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className="header">
            <div className="logo">
              <img src={samurai} alt="" />
              <h1>Isaac</h1>
            </div>
            <div className="navs">
              <button
                className={activeNav === 'about' ? 'active' : ''}
                onClick={() => setActiveNav('about')}
              >
                About Me
              </button>
              <button
                className={activeNav === 'skills' ? 'active' : ''}
                onClick={() => setActiveNav('skills')}
              >
                Skills
              </button>
              <button
                className={activeNav === 'goals' ? 'active' : ''}
                onClick={() => setActiveNav('goals')}
              >
                Goals
              </button>
              <button
                className={activeNav === 'projects' ? 'active' : ''}
                onClick={() => setActiveNav('projects')}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="hero-page">
            <div className="hero-img">
              <img src={hero} alt="" />
            </div>
            <div className="sun" style={{ top: `${scrollY * 0.8}px` }}></div>
            <div className="hero-name">
              <div className="bg-name">
                <h2>アイザック</h2>
              </div>
              <h1 className="heroh1">Isaac</h1>
            </div>
            {/* <div className="clouds">
              <img src={cloud} alt="" />
              <img src={cloud1} alt="" />
              <img src={cloud2} alt="" />
              <img src={cloud3} alt="" />
            </div> */}
          </div>

          <div className={`about-page ${scrollY > 300 ? "visible" : ""}`}>
            <div className="abouts">
              <div className="about-me">
                <h3>About me</h3>
                <p>
                  I am an aspiring full-stack developer passionate about AI and web development.
                  I specialize in building dynamic, user-friendly applications using Django and React.
                  My curiosity for technology drives me to constantly explore new frameworks, tools,
                  and best practices to enhance my skills and create innovative solutions.
                </p>
                <div className="call-to-action">
                  <div className="c1">
                    <a href="https://www.facebook.com/eixaax/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="iconcchi" icon={faFacebook} size="2x" color="#0f3252"/>
                    </a>
                  </div>
                  <div className="c1">
                    <a href="https://www.instagram.com/eixaxx/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="iconcchi" icon={faInstagram} size="2x" color="#0f3252"/>
                    </a>
                  </div>
                  <div className="c1">
                    <a href="https://github.com/Eixaax" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="iconcchi" icon={faGithub} size="2x" color="#0f3252"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="abouts">
              <div className="about-me">
                <img src={samuraiAbout} alt="" />
              </div>
            </div>
          </div>

          <div className={`skills-page ${scrollY > 1000 ? "visible" : ""}`}>
            <div className="tech-stacks">

            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
