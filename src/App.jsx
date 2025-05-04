import { useEffect, useState } from "react";
import "./App.css";
import "./ojt-carousel.css";
import OJTCarousel from "./ojt-carousel";


import hero from "./assets/hero-bg.jpg";
import samurai from "./assets/samurai.png";
import redcloud from "./assets/redclouds.jpg";
import border from "./assets/border.jpg";
import hud from "./assets/hud.png";

import samuraiAbout from "./assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


import python from "./assets/python.svg";
import api from "./assets/api.svg";

import laravel from "./assets/laravel.svg";
import html from "./assets/html.svg"; 
import css from "./assets/css.svg";
import js from "./assets/js.svg"; 
import react from "./assets/react.svg";
import php from "./assets/php.svg";
import github from "./assets/github.svg";
import node from "./assets/node.svg";
import sql from "./assets/sql.svg";

import Pokemon from "./assets/pokemon.png";
import baljeet from "./assets/baljeet.png";
import ojt from "./assets/ojt.png";
import se from "./assets/SE.png"; 
import crimson from "./assets/crimson.png";
import eco from "./assets/ecowatt.png";
import powerhouse from "./assets/powerhouse.png";
import scical from "./assets/SCI-CAL.png";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

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
    const bitmapImages = [hero, samurai, hud, samuraiAbout, redcloud, border];
    const svgImages = [python, api, laravel, html, css, js, react, php, github, node, sql];
  
    const total = bitmapImages.length + svgImages.length;
    setTotalImages(total);
  
    svgImages.forEach(() => handleImageLoad());
  
    bitmapImages.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; 
    });
  
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        setImagesLoaded(true);
      }
    }, 5000);
  
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loadedImagesCount === totalImages && totalImages !== 0) {
      setImagesLoaded(true);
    }
  }, [loadedImagesCount, totalImages]);

  useEffect(() => {
    if (!imagesLoaded) return;
  
    const sections = document.querySelectorAll(".observe");
  
    const isMobile = window.innerWidth <= 490 || 375; // or whatever breakpoint you use
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`a[href="#${id}"]`);
  
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            navLink?.classList.add("active");
  
            if (id === "skills") {
              const skillElements = entry.target.querySelectorAll(".skills");
              skillElements.forEach((el, index) => {
                el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                el.classList.add("fade-in-left");
              });
            }
  
            if (id === "goals") {
              const goalBoxes = entry.target.querySelectorAll(".box");
              goalBoxes.forEach((el, index) => {
                el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                el.classList.add("fade-in-up");
              });
            }
  
            if (id === "projects") {
              const goalBoxes = entry.target.querySelectorAll(".project");
              goalBoxes.forEach((el, index) => {
                el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                el.classList.add("fade-in-ups");
              });
            }
  
          } else {
            entry.target.classList.remove("visible");
            navLink?.classList.remove("active");
  
            if (id === "skills") {
              const skillElements = entry.target.querySelectorAll(".skills");
              skillElements.forEach((el) => {
                el.classList.remove("fade-in-left");
                el.style.transition = "";
              });
            }
  
            if (id === "goals") {
              const goalBoxes = entry.target.querySelectorAll(".box");
              goalBoxes.forEach((el) => {
                el.classList.remove("fade-in-up");
                el.style.transition = "";
              });
            }
  
            if (id === "projects") {
              const goalProjects = entry.target.querySelectorAll(".project");
              goalProjects.forEach((el) => {
                el.classList.remove("fade-in-ups");
                el.style.transition = "";
              });
            }
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.5, // lower threshold on mobile
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, [imagesLoaded]);
  
  

  return (
    <div className="main-cont">
      {!imagesLoaded ? (
        <div className="loading-screen">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className="header">
            <a href="#home">
              <div className="logo">
                
                <img src={samurai} alt="" />
                <h1>Isaac</h1>
                
              </div>
            </a>

            <div className="burger" onClick={() => setShowNav(!showNav)}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <div className={`navs ${showNav ? "show" : ""}`}>
              <a href="#about"
                className={activeNav === 'about' ? 'active' : ''}
                onClick={() => {
                  setActiveNav('about');
                  setShowNav(false); 
                }}
              >
                About Me
              </a>
              <a href="#skills"
                className={activeNav === 'skills' ? 'active' : ''}
                onClick={() => {
                  setActiveNav('skills');
                  setShowNav(false);
                }}
              >
                Skills
              </a>
              <a href="#goals"
                className={activeNav === 'goals' ? 'active' : ''}
                onClick={() => {
                  setActiveNav('goals');
                  setShowNav(false);
                }}
              >
                Goals
              </a>
              <a href="#projects"
                className={activeNav === 'projects' ? 'active' : ''}
                onClick={() => {
                  setActiveNav('projects');
                  setShowNav(false);
                }}
              >
                Projects
              </a>
              <a href="#blog"
                className={activeNav === 'blog' ? 'active' : ''}
                onClick={() => {
                  setActiveNav('blog');
                  setShowNav(false);
                }}
              >
                Blog
              </a>
            </div>
          </div>


          <div className="hero-page" id="home">
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
          </div>

          <div className="about-page observe" id="about">
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
            <div className="abouts" id="about">
              {/* <img src={hud} alt="" className="hud" /> */}
              <div className="hud">
                <div className="hud-name">
                  <h2>Isaac</h2>
                  <h3>Full-Stack Developer</h3>
                </div>
                <img src={hud} alt="" />
              </div>

              <div className="about-me">
                {/* <img src={samuraiAbout} alt="" /> */}

                <div className="about-me-img">
                  {/* <img src={samuraiAbout} alt="" /> */}
                  <img src={samuraiAbout} className="me-img" alt="" />
                  
                  <img src={redcloud} alt="" className="about-me-img-bg"/>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-page observe" id="skills">
            <div className="tech-stacks-wrapper">
              <div className="tech-stacks">
                <div className="stack">
                  <img src={laravel} alt="laravel" />
                </div>
                <div className="stack">
                  <img src={python} alt="python" />
                </div>
                <div className="stack">
                  <img src={html} alt="html" />
                </div>
                <div className="stack">
                  <img src={css} alt="css" />
                </div>
                <div className="stack">
                  <img src={js} alt="js" />
                </div>
                <div className="stack">
                  <img src={react} alt="react" />
                </div>
                <div className="stack">
                  <img src={php} alt="php" />
                </div>
                <div className="stack">
                  <img src={github} alt="github" />
                </div>
                <div className="stack">
                  <img src={node} alt="node" />
                </div>
                <div className="stack">
                  <img src={sql} alt="sql" />
                </div> 

                <div className="stack">
                  <img src={laravel} alt="laravel" />
                </div>
                <div className="stack">
                  <img src={python} alt="python" />
                </div>
                <div className="stack">
                  <img src={html} alt="html" />
                </div>
                <div className="stack">
                  <img src={css} alt="css" />
                </div>
                <div className="stack">
                  <img src={js} alt="js" />
                </div>
                <div className="stack">
                  <img src={react} alt="react" />
                </div>
                <div className="stack">
                  <img src={php} alt="php" />
                </div>
                <div className="stack">
                  <img src={github} alt="github" />
                </div>
                <div className="stack">
                  <img src={node} alt="node" />
                </div>
                <div className="stack">
                  <img src={sql} alt="sql" />
                </div> 
              </div>
            </div>

            <div className="skill-container">
              <div className="skill-cont">
                <div className="skills">
                  <div className="skill-icon">
                    <img src={laravel} alt="" />
                    <h1>Laravel</h1>
                  </div>
                  <div className="skill-bar">
                    <div className="bar" style={{width:"60%"}}></div>
                  </div>
                </div>  
                <div className="skills">
                  <div className="skill-icon">
                    <img src={python} alt="" />
                    <h1>Python</h1>
                  </div>
                  <div className="skill-bar">
                    <div className="bar" style={{width:"90%"}}></div>
                  </div>
                </div>  
                <div className="skills">
                  <div className="skill-icon">
                    <img src={react} alt="" />
                    <h1>React</h1>
                  </div>
                  <div className="skill-bar">
                    <div className="bar" style={{width:"75%"}}></div>
                  </div>
                </div>  
                <div className="skills">
                  <div className="skill-icon">
                    <img src={js} alt="" />
                    <h1>JS</h1>
                  </div>
                  <div className="skill-bar">
                    <div className="bar" style={{width:"65%"}}></div>
                  </div>
                </div>  
                <div className="skills">
                  <div className="skill-icon">
                    <img src={node} alt="" />
                    <h1>NODEJS</h1>
                  </div>
                  <div className="skill-bar">
                    <div className="bar" style={{width:"70%"}}></div>
                  </div>
                </div>  
              </div>
              <div className="skill-cont1">
                <div className="skills">
                  <div className="other-skills">
                    <img src={github} alt="" />
                  </div>
                  <div className="other-dets">
                    <p>"I'm confident in using GitHub for version control, collaboration, and managing development workflows efficiently."</p>
                  </div>
                </div> 
                <div className="skills">
                  <div className="other-skills">
                    <img src={api} alt="" />
                  </div>
                  <div className="other-dets">
                    <p>"I'm skilled at designing, integrating, and consuming RESTful APIs for seamless backend and frontend communication."</p>
                  </div>
                </div> 
                <div className="skills">
                  <div className="other-skills">
                    <img src={html} alt="" className="html" />
                    <img src={css} alt="" className="css" />
                  </div>
                  <div className="other-dets">
                    <p>"Though I'm primarily a backend developer, I build clean, responsive, and user-friendly frontends with modern web technologies."</p>
                  </div>
                </div> 
              </div>
              
            </div>

          </div>

          <div className="goals-page observe" id="goals">
            <div className="goals">
              <div className="box">
                <div className="box-content">
                  <h1>Goal 1 </h1>
                  <p>Hoping to Graduate without Failed subjects</p>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h1>Goal 2</h1>
                  <p>Practice and hone skills at home</p>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h1>Goal 3</h1>
                  <p>Hopefully saved a lot to travel</p>
                </div>
              </div>
            </div>

            <div className="goals1">
              <div className="box">
                  <div className="box-content">
                    <h1>Hobby</h1>
                    <p>Movies, Music and Games</p>
                  </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h1>Fun Fact</h1>
                  <p>Pitch black humor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-page observe" id="projects">
            <div className="projects">
              <h1>MY PROJECTS</h1>
              <div className="project-grid">
                <div className="project">
                  <div className="project-image">
                    <img src={se} alt="E-Commerce Platform"/>
                  </div>
                  <div className="project-content">
                    <h3>CSWCD CASE REPORT GENERATOR</h3>
                    <p>A Django project designed to generate action plans for specific problems</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                        <a href="https://eixaax1.pythonanywhere.com/" target="_blank" className="project-btn view-btn">View Project</a>
                        <a href="https://github.com/Eixaax/cswcd-rprt-generator" target="_blank" className="project-btn code-btn">View Code</a>
                      </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">Django</span>
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">JavaScript</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">CHARTJS</span>
                    </div>
                    
                    <div></div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={baljeet} alt="Portfolio Website"/>
                  </div>
                  <div className="project-content">
                    <h3>Baljeet</h3>
                    <p>My first ever full-stack Web application designed to track and generate visual reports of your finances</p>
                  </div>
                  <div className="project-overlay">

                    <div className="overlay-center">
                      <div className="project-buttons">
                      <a href="https://github.com/Eixaax/baljeet" target="_blank" className="project-btn code-btn">View Code</a>
                        </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">Django</span>
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">JavaScript</span>
                      <span className="project-tag">CSS</span>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={Pokemon} alt="Task Management App"/>
                  </div>
                  <div className="project-content">
                    <h3>Pokemon Gew!</h3>
                    <p>A React project that gamifies productivity using the Pokémon API for team building and battle simulation.</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                        <a href="https://pokemongew.netlify.app/" target="_blank" className="project-btn view-btn">View Project</a>
                        <a href="https://github.com/Eixaax/Pokemoncchi" target="_blank" className="project-btn code-btn">View Code</a>
                        </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">API</span>
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">REACT</span>
                      <span className="project-tag">CSS</span>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={scical} alt="Weather Dashboard"/>
                  </div>
                  <div className="project-content">
                    <h3>Scientific Calculator</h3>
                    <p>A web based scientific calculator developed with React</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                        <a href="https://ishascical.netlify.app/" target="_blank" className="project-btn view-btn">View Project</a>
                        <a href="https://github.com/Iszha/react-scical" target="_blank" className="project-btn code-btn">View Code</a>
                        </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">REACT</span>
                      <span className="project-tag">CSS</span>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={crimson} alt="Crimson Things"/>
                  </div>
                  <div className="project-content">
                    <h3>Crimson Things</h3>
                    <p>A social media platform exclusive only for WMSU students with Marketplace and Chat system</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                        <a href="https://github.com/Eixaax/crimsonThings" target="_blank" className="project-btn code-btn">View Code</a>
                      </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">PHP</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">JAVASCRIPT</span>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={ojt} alt="Eco Watt"/>
                  </div>
                  <div className="project-content">
                    <h3>WMSU VENUE RESERVATION SYSTEM</h3>
                    <p>A DJANGO web applications for tracking electric bills using machine learning</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                      <a href="https://github.com/Eixaax/wmsures" target="_blank" className="project-btn code-btn">View Code</a>
                      </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">DJANGO</span>
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">JAVASCRIPT</span>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="project-image">
                    <img src={eco} alt="Recipe Finder"/>
                  </div>
                  <div className="project-content">
                    <h3>Eco-Watt</h3>
                    <p>A Machine learning web application designed to predict bills.</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                      <a href="https://github.com/Eixaax/eco-watt"  target="_blank" className="project-btn code-btn">View Code</a>
                      </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">DJANGO</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">JAVASCRIPT</span>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="project-image">
                    <img src={powerhouse} alt="Travel Blog"/>
                  </div>
                  <div className="project-content">
                    <h3>POWERHOUSE</h3>
                    <p>An E-commerce webiste for gym owners that has gym memberships and equipment rentals.</p>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-center">
                      <div className="project-buttons">
                      <a href="" target="_blank" className="project-btn code-btn">View Code</a>
                      </div>
                    </div>

                    <div className="project-tags">
                      <span className="project-tag">PHP</span>
                      <span className="project-tag">HTML</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">JAVASCRIPT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="blogs-page observe" id="blog">
            <OJTCarousel />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
