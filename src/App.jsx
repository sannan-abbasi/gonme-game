import "./styles/global.css";
import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaGamepad,
  FaCoins,
  FaTrophy,
  FaFlask,
} from "react-icons/fa";

// Assets
import happyGnome from "./assets/happygnome.png";
import laughGnome from "./assets/laughgnome.png";
import angryGnome from "./assets/angrygnome.png";
import backgroundImg from "./assets/background.png";

// Pages
import MissionsPage from "./pages/Mission.jsx";
import GamesPage from "./pages/games/GamesPage.jsx";
import GnomeLocker from "./pages/gnomelocker/GnomeLocker.jsx";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage.jsx";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [coins, setCoins] = useState(12450);
  const [currentGnome, setCurrentGnome] = useState(0);

  // References for Smooth Scrolling
  const homeRef = useRef(null);
  const missionsRef = useRef(null);
  const gamesRef = useRef(null);
  const lockerRef = useRef(null);
  const leaderboardRef = useRef(null);

  const gnomeStates = [
    { image: happyGnome, className: "gnome-walk", speech: "HEHE! Ready for chaos? 😂" },
    { image: laughGnome, className: "gnome-laugh", speech: "HAHAHAHA! THIS IS FUNNY 🤣" },
    { image: angryGnome, className: "gnome-angry", speech: "WHO STOLE MY MUSHROOM?! 😡" },
  ];

  const [speech, setSpeech] = useState(gnomeStates[0].speech);

  // Scroll Handler
  const scrollToSection = (elementRef, pageName) => {
    setActivePage(pageName);
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
useEffect(() => {
  const cursor = document.querySelector(".custom-cursor");
  const dot = document.querySelector(".cursor-dot");

  const moveCursor = (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
  };

  window.addEventListener("mousemove", moveCursor);

  const hoverElements = document.querySelectorAll(
    "button, .nav-item, .item"
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);
  // Auto-change Gnome Mood
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * gnomeStates.length);
      setCurrentGnome(randomIndex);
      setSpeech(gnomeStates[randomIndex].speech);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82)), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden"
      }}
    >
      {/* ================= TOPBAR (Fixed Navigation) ================= */}
      <div className="topbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="logo">LOL GNOME</div>

        <div className="nav">
          <div className={`nav-item ${activePage === "home" ? "active" : ""}`}
            onClick={() => scrollToSection(homeRef, "home")}>
            <FaHome /> Home
          </div>

          <div className={`nav-item ${activePage === "missions" ? "active" : ""}`}
            onClick={() => scrollToSection(missionsRef, "missions")}>
            <FaTrophy /> Missions
          </div>

          <div className={`nav-item ${activePage === "games" ? "active" : ""}`}
            onClick={() => scrollToSection(gamesRef, "games")}>
            <FaGamepad /> Mini Games
          </div>

          <div className={`nav-item ${activePage === "locker" ? "active" : ""}`}
            onClick={() => scrollToSection(lockerRef, "locker")}>
            <FaFlask /> Gnome Locker
          </div>

          <div className={`nav-item ${activePage === "leaderboard" ? "active" : ""}`}
            onClick={() => scrollToSection(leaderboardRef, "leaderboard")}>
            <FaTrophy /> Leaderboard
          </div>
        </div>

        <div className="coins-box">
          <FaCoins /> {coins.toLocaleString()}
        </div>
      </div>

      {/* ================= CONTINUOUS CONTENT STACK ================= */}
      <div className="content-stack">
        
        {/* SECTION: HOME */}
        <section ref={homeRef} className="section-container">
          <div className="main-layout">
            <div className="left-panel">
              <div className="hero-text">
                <h1>LAUGH.<br />PLAY.<br /><span>CAUSE CHAOS!</span></h1>
                <p>Step into the world of the silliest gnome and enjoy mini games that will crack you up!</p>
                <button className="play-btn" onClick={() => scrollToSection(gamesRef, "games")}>
                  PLAY NOW
                </button>
              </div>
            </div>
            <div className="center-panel">
              <div className="gnome-container">
                <div className="glow"></div>
                <img 
                  src={gnomeStates[currentGnome].image} 
                  alt="gnome" 
                  className={`gnome ${gnomeStates[currentGnome].className}`} 
                />
                <div className="speech">{speech}</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: MISSIONS */}
        <section ref={missionsRef} className="section-container">
            <MissionsPage coins={coins} setCoins={setCoins} />
        </section>

        {/* SECTION: MINI GAMES */}
        <section ref={gamesRef} className="section-container">
            <GamesPage coins={coins} setCoins={setCoins} />
        </section>

        {/* SECTION: GNOME LOCKER */}
        <section ref={lockerRef} className="section-container">
            <GnomeLocker coins={coins} setCoins={setCoins} />
        </section>

        {/* SECTION: LEADERBOARD */}
        <section ref={leaderboardRef} className="section-container">
            <LeaderboardPage coins={coins} setCoins={setCoins} />
        </section>

      </div>
      <div className="custom-cursor"></div>
<div className="cursor-dot"></div>
    </div>
  );
}

export default App;