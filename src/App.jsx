import './App.css';
import profileImg from './assets/pp.jpg';
import Guess from './assets/Wfi.png';
import LPP from './assets/LPP.png';
import BRGY from './assets/Brgy.png';
import lppp from './assets/lppp.png';
import Gppp from './assets/guess_logo.png';
import Bppp from './assets/BRGY.svg';
import Cppp from './assets/Cursor.png';
import MSU from './assets/MSU.png';
import Image from './assets/Icon.svg';
import Canva from './assets/canva.png';
import Figma from './assets/figma.png';
import Power from './assets/Power.png';
import HCJ from './assets/HCJ.png';
import Ex from './assets/Express.png';
import Mk from './assets/mk.png';
import MySql from './assets/mySql.png';
import Re from './assets/react.png';
import Php from './assets/php.png';
import mongo from './assets/Mongo.jpg';
import arrowLeft from '../public/Arrowl.svg';
import arrowRigth from '../public/Arrowr.svg';
import Open from '../public/Open.svg';
import Close from '../public/Close.svg';


import Vite from './assets/Vitejs-logo.svg.png';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaFileDownload  } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);



  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/UpResume.pdf';
    link.download = 'NorAmin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const titles = [' Software Developer', 'n UI/UX Designer', ` Graphics Designer`];
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + titles[currentTitleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 100);
      } else {
        setTyping(true);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, titles, currentTitleIndex]);

  const skills = [
    { name: "Express", img: Ex, percent: 80 },
    { name: "PHP", img: Php, percent: 80 },
    { name: "Vite", img: Vite, percent: 75 },
    { name: "React", img: Re, percent: 75 },
    { name: "HTML, CSS, JS", img: HCJ, percent: 75 },
    { name: "MySQL", img: MySql, percent: 85 },
    { name: "mongoDB", img: mongo, percent: 85 },
    { name: "Canva", img: Canva, percent: 80 },
    { name: "Figma", img: Figma, percent: 80 },
    { name: "Power", img: Power, percent: 60 },
    { name: "MikroTik", img: Mk, percent: 75 },
  ];
 // ✅ Graphics Carousel
  const graphicsImages = [
    '/graphics/1.png',
    '/graphics/2.png',
    '/graphics/3.png',
    '/graphics/4.png',
    '/graphics/5.png',
    '/graphics/6.png',
    '/graphics/7.png',
    '/graphics/8.png',
    '/graphics/9.png',
    '/graphics/10.png',
    '/graphics/11.png',
    '/graphics/12.png',
    '/graphics/13.png',
    '/graphics/14.png',
    '/graphics/15.png',
    '/graphics/16.png',
  ];

  const [graphicIndex, setGraphicIndex] = useState(0);

  const nextGraphic = () => {
    setGraphicIndex((prev) => (prev + 1) % graphicsImages.length);
  };

  const prevGraphic = () => {
    setGraphicIndex((prev) => (prev - 1 + graphicsImages.length) % graphicsImages.length);
  };
  

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <img src={Image} alt="Profile" className="icon"  />
            </div>

          {/* Burger Icon */}

          {/* Custom Menu Icon */}
<div className="burger" onClick={toggleMenu}>
  {menuOpen ? (
    <img src={Close} alt="Close Menu" className="burger-icon" />
  ) : (
    <img src={Open} alt="Open Menu" className="burger-icon" />
  )}
</div>
          {/* <div className="burger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>   */}

          {/* Navigation Menu */}
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <ul>
    <li><a href="#" onClick={closeMenu}>Home</a></li>
    <li><a href="#about" onClick={closeMenu}>About Me</a></li>
    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
    <li><a href="#graphics" onClick={closeMenu}>Graphics</a></li>
    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
    <li><a href="#skill" onClick={closeMenu}>Skills</a></li>
    <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
    
  </ul>
</nav>

        </div>

        <div className="intro-section">
          <h3>Hello & Welcome</h3>
          <h1>I am a{displayedText}<span className="cursor">|</span></h1>

          {/* Socials */}
          <div className="socials">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jd_ali_29/profilecard/?igsh=MTNjN3c3a3J3bThlaQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/noramin2020" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/Light002911" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>

          <button className="cv-btn" onClick={handleDownload}><FaFileDownload /> Resume</button>
        </div>
      </header>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-content">
          <div>
            {/* <img src={profileImg} alt="Profile" className="profile-img" /> */}
          </div>
          <div className="about-text">
            <h2>Hi,</h2>
            <h2>
              I'm <span className="highlight">Nor-Amin Hadji Ali</span>,
            </h2>
            <p>
              I am a Bachelor of Science in Information Technology (BSIT) graduate from Mindanao State University – Main Campus in Marawi City. During my college years, I served as the Cartoon Editor for The Cursor Publication, combining creativity with leadership.
            </p>
            <p>
              My professional focus is in Software Development, with experience as a WordPress Developer and UI/UX Developer. In addition to development, I also have hands-on experience in IT support, including network support, troubleshooting, and MikroTik configuration. I bring a well-rounded skill set that merges technical expertise with creative problem-solving and design thinking.
            </p>

            {/* Floating Icons */}
            {/* <div className="floating-icons-container">
              <div className="icon-wrapper"><FaLinkedin className="floating-icon" /></div>
              <div className="icon-wrapper"><FaGithub className="floating-icon" /></div>
              <div className="icon-wrapper"><FaEnvelope className="floating-icon" /></div>
              <div className="icon-wrapper"><FaInstagram className="floating-icon" /></div>
              <div className="icon-wrapper"><FaFacebook className="floating-icon" /></div>
            </div> */}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="projects" id="portfolio">
        <h2>Portfolio</h2>

        <div className="project-card">
          <div className="project-text">
            <h3>Barangay Management System</h3>
            <h4>Developed a web-based system for resident profiling, certificate generation, and QR code encryption for document authentication. Enabled A4-size PDF downloads of generated certificates with embedded encrypted QR codes, ensuring secure and efficient management of barangay records.</h4>
          </div>
          <img className="logo" src={Bppp} alt="Logo" />
          <img src={BRGY} alt="BRGY System" />
        </div>

        <div className="project-card">
          <div className="project-text">
            <h3>Redesign Launchpad Website</h3>
            <h4>Redesign the UI of the main websites of the Company using Figma, and Canva for Logos.</h4>
            <h4>https://thelaunchpadteam.com/</h4>
          </div>
          <a href="https://thelaunchpadteam.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={lppp} alt="Launchpad Logo" />
            <img src={LPP} alt="LPP GC Chat" />
          </a>
        </div>

        <div className="project-card">
          <div className="project-text">
            <h3>Wi-fi Access Control System for Learning of Students</h3>
            <h4>Developed a web-based system for secured Wi-Fi access in CICS by configuring a MikroTik router and integrating API-based user authentication. Implemented user access control and blacklist management to enhance network security and ensure efficient user management.</h4>
          </div>
          <img className="logo" src={Gppp} alt="Guess Logo" />
          <img src={Guess} alt="WiFi System" />
        </div>
      </section>

           {/* GRAPHICS SECTION */}
      <section className="graphics-section" id="graphics">
        
<h2 className="graphics-title">Graphics Design Gallery</h2>

        <div className="graphics-container">
          <button className="nav-btn left" onClick={prevGraphic}>
                    <img
                      src={arrowLeft}
                      alt="Previous"
                      className="arrow-icon"
                    />
                  </button>


          <div className="graphics-view">
            <AnimatePresence mode="wait">
              <motion.img
                key={graphicIndex}
                src={graphicsImages[graphicIndex]}
                alt={`Graphic ${graphicIndex + 1}`}
                className="graphics-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          <button className="nav-btn right" onClick={nextGraphic}>
                    <img
                      src={arrowRigth}
                      alt="Next"
                      className="arrow-icon"
                    />
                  </button>
        </div>
        

        <div className="graphics-dots">
          {graphicsImages.map((_, i) => (
            <span
              key={i}
              onClick={() => setGraphicIndex(i)}
              className={`dot ${i === graphicIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        
        
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <h2>Experience and Education</h2>
        <div className="exp-cards">
          <div className="exp-card">
            <img src={lppp} alt="The Launchpadteam Inc." className="exp-image" />
            <div className="exp-text">
              <h4>The Launchpadteam Inc.<br />September-December 2024</h4>
              <p>Roles: IT Intern</p>
              <p>Software Developer<br />Wordpress Developer<br />UI/UX Developer<br />IT-Support</p>
            </div>
          </div>
          <div className="exp-card">
            <img src={Cppp} alt="The Cursor Publication" className="exp-image" />
            <div className="exp-text">
              <h4>The Cursor Publication<br />2023-2025</h4>
              <p>Roles: Former Member</p>
              <p>Cartoon Editor<br />Cartoonist</p>
            </div>
          </div>
          <div className="exp-card">
            <img src={MSU} alt="Mindanao State University Main Campus" className="exp-image" />
            <div className="exp-text">
              <h4>Mindanao State University Main Campus<br />2020-2025</h4>
              <p>Bachelor of Science in Information Technology<br />Network Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skill">
        <h2>Skills</h2>
        <div className="skills-slider">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
                {/* <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div> */}
                {/* <span className="percentage">{skill.percent}%</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact" id="contact">
        {/* <img src={Image} alt="Logo" className="footer-logo" /> */}
        <p>Email: <a href="mailto:nor-amin.hadjiali@outlook.com">nor-amin.hadjiali@outlook.com</a></p>
        <p>Contact Number: +63 905 691 9279</p>
        <p>Cagayan de Oro, Misamis Oriental, Philippines</p>
      
        <hr className="footer-divider" />

        <div className="footerS">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/jd_ali_29/profilecard/?igsh=MTNjN3c3a3J3bThlaQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/noramin2020" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/Light002911" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
