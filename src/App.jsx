import "./styles/global.css";

import happyGnome from "./assets/happygnome.png";
import laughGnome from "./assets/laughgnome.png";
import angryGnome from "./assets/angrygnome.png";

import backgroundImg from "./assets/background.png";

import MissionsPage from "./pages/Mission";
import GamesPage from "./pages/games/GamesPage";
import GnomeLocker from "./pages/GnomeLocker/GnomeLocker";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage";

import {
  FaHome,
  FaGamepad,
  FaCoins,
  FaTrophy,
  FaFlask,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");

  const [coins, setCoins] = useState(12450);

  const gnomeStates = [
    {
      image: happyGnome,
      className: "gnome-walk",
      speech: "HEHE! Ready for chaos? 😂",
    },

    {
      image: laughGnome,
      className: "gnome-laugh",
      speech: "HAHAHAHA! THIS IS FUNNY 🤣",
    },

    {
      image: angryGnome,
      className: "gnome-angry",
      speech: "WHO STOLE MY MUSHROOM?! 😡",
    },
  ];

  const [currentGnome, setCurrentGnome] = useState(0);

  const [speech, setSpeech] = useState(
    gnomeStates[0].speech
  );

  /* =========================
     AUTO CHANGE GNOME
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * gnomeStates.length
      );

      setCurrentGnome(randomIndex);

      setSpeech(
        gnomeStates[randomIndex].speech
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     PLAY GAME
  ========================= */
  const playGame = (game) => {
    setCoins((prev) => prev + 250);

    const speeches = [
      "HAHA! AGAIN!",
      "CHAOS ACTIVATED!",
      "YOU CLICK FAST!",
      "THIS IS INSANE!",
      "MORE MAYHEM!",
    ];

    setSpeech(
      speeches[
        Math.floor(Math.random() * speeches.length)
      ]
    );

    alert(`${game} launched!`);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.72),
            rgba(0,0,0,0.82)
          ),
          url(${backgroundImg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* ================= TOPBAR ================= */}
      <div className="topbar">
        <div className="logo">
          LOL GNOME
        </div>

        <div className="nav">
          {/* HOME */}
          <div
            className={`nav-item ${
              activePage === "home"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("home")
            }
          >
            <FaHome />
            Home
          </div>

          {/* MISSIONS */}
          <div
            className={`nav-item ${
              activePage === "missions"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("missions")
            }
          >
            <FaTrophy />
            Missions
          </div>

          {/* GAMES */}
          <div
            className={`nav-item ${
              activePage === "games"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("games")
            }
          >
            <FaGamepad />
            Mini Games
          </div>

          {/* LOCKER */}
          <div
            className={`nav-item ${
              activePage === "locker"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("locker")
            }
          >
            <FaFlask />
            Gnome Locker
          </div>

          {/* LEADERBOARD */}
          <div
            className={`nav-item ${
              activePage === "leaderboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage(
                "leaderboard"
              )
            }
          >
            <FaTrophy />
            Leaderboard
          </div>
        </div>

        <div className="coins-box">
          <FaCoins />
          {coins.toLocaleString()}
        </div>
      </div>

      {/* ================= HOME ================= */}
      {activePage === "home" && (
        <div className="main-layout">
          {/* LEFT */}
          <div className="left-panel">
            <div className="hero-text">
              <h1>
                LAUGH.
                <br />
                PLAY.
                <br />
                <span>
                  CAUSE CHAOS!
                </span>
              </h1>

              <p>
                Step into the world of
                the silliest gnome and
                enjoy mini games that
                will crack you up!
              </p>

              <button
                className="play-btn"
                onClick={() =>
                  setActivePage(
                    "games"
                  )
                }
              >
                PLAY NOW
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="center-panel">
            <div className="gnome-container">
              <div className="glow"></div>

              <img
                src={
                  gnomeStates[
                    currentGnome
                  ].image
                }
                alt="gnome"
                className={`gnome ${
                  gnomeStates[
                    currentGnome
                  ].className
                }`}
              />

              <div className="speech">
                {speech}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGES ================= */}

      {activePage === "missions" && (
        <div className="page-container">
          <MissionsPage
            coins={coins}
            setCoins={setCoins}
          />
        </div>
      )}

      {activePage === "games" && (
        <div className="page-container">
          <GamesPage
            coins={coins}
            setCoins={setCoins}
          />
        </div>
      )}

      {activePage === "locker" && (
        <div className="page-container">
          <GnomeLocker
            coins={coins}
            setCoins={setCoins}
          />
        </div>
      )}

      {activePage ===
        "leaderboard" && (
        <div className="page-container">
          <LeaderboardPage
            coins={coins}
            setCoins={setCoins}
          />
        </div>
      )}
    </div>
  );
}

export default App;