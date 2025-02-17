import { useEffect } from "react";
import "./App.css";
import pagoda from "./assets/pagoda.png";


function App() {
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      const mainCont = document.querySelector(".main-cont");
      const title = document.querySelector("h1");
      const container = document.querySelector(".container");

      if (mainCont) {
        mainCont.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        title.style.transform = `translateY(${scrollPosition * -1}px`;

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main-cont">
        <div className="header">
          <button>Home</button>
          <button>About me</button>
          <img src={pagoda} alt="Pagoda" />
          <button>Portfolio</button>
          <button>Contact</button>
        </div>
        <h1>Isaac</h1>
        <div className="container"></div>
      </div>

      <div className="about">
        <div className="about-me">
          <h2>About Me</h2>
          <p>I am an aspiring full-stack developer passionate about AI and web development. I specialize in building dynamic, user-friendly applications using Django and React. Always eager to learn and innovate, I strive to create scalable solutions that enhance user experiences and drive meaningful impact.</p>
        </div>
        <div className="pagoda">
          <img src={pagoda} alt="Pagoda" />
        </div>
      </div>

      <div className="what-i-do">
        <h2>What I do</h2>
        <div className="grid">
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Front-end Development</h3>
          </div>
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Web Development</h3>
            <p>I specialize in creating responsive and user-friendly websites using modern technologies 
              like HTML, CSS, JavaScript, and frameworks like React and Django</p>
          </div>
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Software Development</h3>
            <p>I develop efficient and scalable software solutions tailored to meet client requirements,
               with expertise in Python, Django, and database management.</p>
          </div>
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Front-end Development</h3>
          </div>
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Front-end Development</h3>
          </div>
          <div className="grid-cont">
          <img src={pagoda} alt="Pagoda"/>
            <h3>Front-end Development</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
``
