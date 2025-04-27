import { useEffect, useState } from "react";
import "./App.css";
import pagoda from "./assets/pagoda.png";
import m0 from "./assets/m0.png";
import m1 from "./assets/m1.png";
import m2 from "./assets/m2.png";
import m3 from "./assets/m3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const leafContainer = document.querySelector(".falling-leaves");

    function createLeaf() {
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");

      const size = Math.random() * 20 + 20; 
      leaf.style.width = `${size}px`;
      leaf.style.height = `${size}px`;

      leaf.style.left = Math.random() * 100 + "vw";

      const duration = Math.random() * 4 + 4; 
      leaf.style.animationDuration = `${duration}s`;

      leafContainer.appendChild(leaf);

      setTimeout(() => {
        leaf.remove();
      }, duration * 1000); 
    }

    // Generate leaves every 400ms
    const interval = setInterval(createLeaf, 400);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const images = [pagoda, m0, m1, m2, m3];

    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true); 
        }
      };
    });
  }, []);

  

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      const mainCont = document.querySelector(".main-cont");
      const title = document.querySelector("h1");
      const m1Img = document.querySelector(".img1");
      const m2Img = document.querySelector(".img2");
      const m3Img = document.querySelector(".img3");
  
      if (mainCont) {
        mainCont.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        title.style.transform = `translateY(${scrollPosition * -1}px)`;
      }
  
      if (m1Img) {
        console.log("Updating m1 position"); 
        m1Img.style.transform = `translateX(${scrollPosition * 0.5}px)`; 
      }
  
      if (m3Img) {
        m3Img.style.transform = `translateX(${scrollPosition * 0.7}px) translateX(-50%)`;
      }

      if (m2Img) {
        m2Img.style.transform = `translateX(${scrollPosition * -0.7}px)`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <>

      <div className="falling-leaves"></div> 


      {!imagesLoaded ? ( // Show loading screen until images are loaded
        <div className="loading-screen">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>

        
          <div className="header">
            <button>Home</button>
            <button>About me</button> 
            <img src={pagoda} alt="Pagoda" />
            <button>Portfolio</button>
            <button>Contact</button>
          </div>

          <div className="mountains">
            <div className="mountain-cont">
              <img src={m0} className="img0" alt="m0" />
              <img src={m1} className="img1" alt="m1" />
              <img src={m2} className="img2" alt="m2" />
              <img src={m3} className="img3" alt="m3" />
            </div>
          </div>

          <div className="main-cont">
            <h1>Isaac</h1>
            <div className="container"></div>
          </div>

          <div className="about" id="about">
            <div className="about-me">
              <h2>About Me</h2>
              <p>
              I am an aspiring full-stack developer passionate about AI and web development.
               I specialize in building dynamic, user-friendly applications using Django and React.
                My curiosity for technology drives me to constantly explore new frameworks, tools,
                 and best practices to enhance my skills and create innovative solutions.</p>
              <div className="call-to-action">
                <div className="c1">
                  <a href="https://www.facebook.com/eixaax/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="iconcchi" icon={faFacebook} size="2x" color="white"/>
                  </a>
                  </div>
                <div className="c1">
                  <a href="https://www.instagram.com/eixaxx/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="iconcchi" icon={faInstagram} size="2x" color="white"/>
                  </a>
                  </div>
                <div className="c1">
                  <a href="https://github.com/Eixaax" target="_blank" rel="noopener noreferrer">
                  
                    <FontAwesomeIcon className="iconcchi" icon={faGithub} size="2x" color="white"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="pagoda">
              <img src={pagoda} alt="Pagoda" />
            </div>
          </div>

          <section className="personal">
            <h1>PERSONAL GOALS</h1>

            <div className="goals">

              <div className="goal">
                <h1>2025 - Graduate</h1>
                <p>Hoping to Graduate without Failed subjects</p>
              </div>
              <div className="goal">
                <h1>2026 - Hone Skills</h1>
                <p>Practice and hone skills at home</p>
              </div>
              <div className="goal">
                <h1>2027 - Travel</h1>
                <p>Hopefully saved a lot to travel</p>

              </div>
              
            </div> 
            <div className="hobby-fun">
              <div className="hobby">
                <h1>Hobby</h1>
                <div className="goal">
                  <p>Watch movies and series, Play Video Games and listen to music</p>
                </div>
              </div>

              <div className="fun">
                  <h1>Fun Fact</h1>
                  <div className="goal">
                  <p>Pitch Black humor</p>
                </div>
              </div>
            </div>
          </section>

          <div className="skills">
            <div className="stacks">
              <div className="text-stacks">
                <h1>REACT</h1>
              </div>
              <div className="text-stacks">
                <h1>CCS</h1>
              </div>
              <div className="text-stacks">
                <h1>HTML</h1>
              </div>
              <div className="text-stacks">
                <h1>JAVASCRIPT</h1>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
