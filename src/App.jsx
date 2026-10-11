import './App.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaFileDownload } from 'react-icons/fa';

// Project + experience images
import Guess from './assets/Wfi.png';
import LPP from './assets/LPP.png';
import BRGY from './assets/Brgy.png';
import lppp from './assets/lppp.png';
import Gppp from './assets/guess_logo.png';
import Bppp from './assets/BRGY.svg';
import Cppp from './assets/Cursor.png';
import MSU from './assets/MSU.png';
import Logo from './assets/Icon.svg';

// Skill icons
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
import Vite from './assets/Vitejs-logo.svg.png';

/* ---------- Data (defined outside the component so it isn't rebuilt every render) ---------- */

const TITLES = ['a Software Developer', 'an UI/UX Designer', 'a Graphics Designer'];

const NAV = [
  ['#about', 'About'],
  ['#portfolio', 'Portfolio'],
  ['#graphics', 'Graphics'],
  ['#experience', 'Experience'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', Icon: FaLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/jd_ali_29/profilecard/?igsh=MTNjN3c3a3J3bThlaQ==', Icon: FaInstagram },
  { label: 'GitHub', href: 'https://github.com/noramin2020', Icon: FaGithub },
  { label: 'Facebook', href: 'https://www.facebook.com/Light002911', Icon: FaFacebook },
];

const PROJECTS = [
  {
    title: 'Barangay Management System',
    text: 'A web-based system for resident profiling and certificate generation. Certificates download as A4 PDFs with an embedded, encrypted QR code so each document can be authenticated.',
    logo: Bppp,
    shot: BRGY,
    alt: 'Barangay Management System screenshot',
  },
  {
    title: 'Launchpad Website Redesign',
    text: "A redesign of the company's main website UI in Figma, with logos made in Canva.",
    logo: lppp,
    shot: LPP,
    alt: 'Launchpad website redesign screenshot',
    href: 'https://thelaunchpadteam.com/',
  },
  {
    title: 'Wi-Fi Access Control for Student Learning',
    text: 'Secured Wi-Fi access for CICS using a configured MikroTik router and API-based user login. Includes access control and blacklist management.',
    logo: Gppp,
    shot: Guess,
    alt: 'Wi-Fi access control system screenshot',
  },
];

const EXPERIENCE = [
  {
    img: lppp,
    alt: 'The Launchpadteam Inc.',
    title: 'The Launchpadteam Inc.',
    when: 'September–December 2024',
    role: 'IT Intern',
    items: ['Software Developer', 'WordPress Developer', 'UI/UX Developer', 'IT Support'],
  },
  {
    img: Cppp,
    alt: 'The Cursor Publication',
    title: 'The Cursor Publication',
    when: '2023–2025',
    role: 'Former Member',
    items: ['Cartoon Editor', 'Cartoonist'],
  },
  {
    img: MSU,
    alt: 'Mindanao State University Main Campus',
    title: 'Mindanao State University Main Campus',
    when: '2020–2025',
    role: 'Bachelor of Science in Information Technology',
    items: ['Network Systems'],
  },
];

const SKILLS = [
  { name: 'Express', img: Ex },
  { name: 'PHP', img: Php },
  { name: 'Vite', img: Vite },
  { name: 'React', img: Re },
  { name: 'HTML, CSS, JS', img: HCJ },
  { name: 'MySQL', img: MySql },
  { name: 'MongoDB', img: mongo },
  { name: 'Canva', img: Canva },
  { name: 'Figma', img: Figma },
  { name: 'Power', img: Power },
  { name: 'MikroTik', img: Mk },
];

const GRAPHICS = Array.from({ length: 16 }, (_, i) => `/graphics/${i + 1}.png`);

/* ---------- Typing effect ---------- */

function useTyping(words) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(reduced ? words[0] : '');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }
    const full = words[index];
    let timer;
    if (!deleting && text === full) {
      timer = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? 55 : 100
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduced]);

  return text;
}

/* ---------- App ---------- */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [graphicIndex, setGraphicIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);
  const reduced = useReducedMotion();
  const typed = useTyping(TITLES);

  /* Menu: close on Escape, stop the page scrolling behind the open menu */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  /* Close the menu if the screen grows to desktop size */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const go = useCallback((step) => {
    setDirection(step);
    setGraphicIndex((i) => (i + step + GRAPHICS.length) % GRAPHICS.length);
  }, []);

  const jump = (i) => {
    setDirection(i > graphicIndex ? 1 : -1);
    setGraphicIndex(i);
  };

  const onGalleryKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ResumeUpdated.pdf';
    link.download = 'NorAmin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const slide = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: 60 * direction },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -60 * direction },
      };

  return (
    <div className="app">
      <a className="skip-link" href="#about">Skip to content</a>

      {/* HEADER */}
      <header className="site-header">
        <div className="bar">
          <a href="#top" className="brand" aria-label="Back to top" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="" className="brand-icon" />
          </a>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={`menu-lines ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>

          <nav id="site-nav" className={`site-nav ${menuOpen ? 'active' : ''}`} aria-label="Main">
            <ul>
              {NAV.map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-panel">
            <p className="hero-hello">Hello &amp; welcome</p>
            <h1 aria-label="I am a software developer, UI/UX designer and graphics designer">
              <span aria-hidden="true">
                I am {typed}
                <span className="cursor">|</span>
              </span>
            </h1>

            <div className="hero-actions">
              <button type="button" className="btn" onClick={handleDownload}>
                <FaFileDownload aria-hidden="true" /> Resume
              </button>
              <ul className="socials" aria-label="Social links">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <h2>About me</h2>
          <div className="about-text">
            <p className="about-lead">
              I'm <strong>Nor-Amin Hadji Ali</strong>, a Bachelor of Science in Information Technology (BSIT)
              graduate from Mindanao State University – Main Campus in Marawi City.
            </p>
            <p>
              During my college years I served as Cartoon Editor for The Cursor Publication, combining
              creativity with leadership.
            </p>
            <p>
              My focus is software development, with experience as a WordPress developer and UI/UX developer. I
              also have hands-on IT support experience in network support, troubleshooting, and MikroTik
              configuration, so I bring technical skill and design thinking to the same project.
            </p>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="section" id="portfolio">
          <h2>Portfolio</h2>
          <div className="projects">
            {PROJECTS.map((p) => {
              const shot = <img className="project-shot" src={p.shot} alt={p.alt} loading="lazy" />;
              return (
                <article className="project" key={p.title}>
                  <div className="project-text">
                    <img className="project-logo" src={p.logo} alt="" loading="lazy" />
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    {p.href && (
                      <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer">
                        Visit {p.href.replace('https://', '').replace(/\/$/, '')}
                      </a>
                    )}
                  </div>
                  <div className="project-media">{shot}</div>
                </article>
              );
            })}
          </div>
        </section>

        {/* GRAPHICS */}
        <section className="section" id="graphics">
          <h2>Graphics design gallery</h2>

          <div
            className="gallery"
            role="group"
            aria-roledescription="carousel"
            aria-label="Graphics design gallery"
            tabIndex={0}
            onKeyDown={onGalleryKey}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button type="button" className="gallery-btn left" onClick={() => go(-1)} aria-label="Previous graphic">
              <img src="/Arrowl.svg" alt="" />
            </button>

            <div className="gallery-view">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={graphicIndex}
                  src={GRAPHICS[graphicIndex]}
                  alt={`Graphic ${graphicIndex + 1} of ${GRAPHICS.length}`}
                  className="gallery-image"
                  {...slide}
                  transition={{ duration: reduced ? 0.15 : 0.35 }}
                />
              </AnimatePresence>
            </div>

            <button type="button" className="gallery-btn right" onClick={() => go(1)} aria-label="Next graphic">
              <img src="/Arrowr.svg" alt="" />
            </button>
          </div>

          <p className="gallery-count" aria-live="polite">
            {graphicIndex + 1} / {GRAPHICS.length}
          </p>

          {/* Thumbnails scroll sideways on small screens instead of 16 tiny dots */}
          <div className="thumbs" role="list">
            {GRAPHICS.map((src, i) => (
              <button
                type="button"
                role="listitem"
                key={src}
                className={`thumb ${i === graphicIndex ? 'active' : ''}`}
                onClick={() => jump(i)}
                aria-label={`Show graphic ${i + 1}`}
                aria-current={i === graphicIndex}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <h2>Experience and education</h2>
          <div className="exp-grid">
            {EXPERIENCE.map((e) => (
              <article className="exp-card" key={e.title}>
                <img src={e.img} alt={e.alt} className="exp-image" loading="lazy" />
                <div className="exp-text">
                  <h3>{e.title}</h3>
                  <p className="exp-when">{e.when}</p>
                  <p className="exp-role">{e.role}</p>
                  <ul>
                    {e.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <h2>Skills</h2>
          <div className="marquee">
            <ul className="marquee-track">
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <li className="skill" key={i} aria-hidden={i >= SKILLS.length ? 'true' : undefined}>
                  <img src={s.img} alt="" className="skill-icon" loading="lazy" />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer" id="contact">
        <h2>Contact me</h2>
        <address>
          <p>
            <a href="mailto:hadjialinoramin@gmail.com">hadjialinoramin@gmail.com</a>
          </p>
          <p>
            <a href="tel:+639056919279">+63 905 691 9279</a>
          </p>
          <p>Marawi City, Misamis Oriental, Philippines</p>
        </address>
        <ul className="socials" aria-label="Social links">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
