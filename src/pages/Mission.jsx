import "./mission.css";
import { useState } from "react";
import happyGnome from "../assets/happygnome.png";
import laughGnome from "../assets/laughgnome.png";
import angryGnome from "../assets/angrygnome.png";

function MissionsPage({ coins, setCoins }) {
  const [gnomeMood, setGnomeMood] = useState("happy");
  const [message, setMessage] = useState("GNOME: Feed me human...");
  const [hearts, setHearts] = useState(3);
  const [rage, setRage] = useState(0);
  const [mission, setMission] = useState("Make the gnome laugh 3 times");
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const feedGnome = () => {
    setGnomeMood("happy");
    setMessage("GNOME: YOU ARE A BEAUTIFUL CREATURE ❤️");
    setCoins(coins + 100);
    if (hearts < 5) setHearts(hearts + 1);
  };

  const tickleGnome = () => {
    setGnomeMood("laugh");
    setMessage("GNOME: HAHAHA STOP IT 😂");
    setCoins(coins + 50);
    const newProgress = progress + 1;
    if (newProgress <= 3) setProgress(newProgress);

    if (newProgress >= 3 && !completed) {
      setCompleted(true);
      setCoins(coins + 500);
      setMission("MISSION COMPLETE 🎉");
      setMessage("GNOME: YOU DID IT HUMAN 😂");
    }
  };

  const slapGnome = () => {
    setGnomeMood("angry");
    setMessage("GNOME: I WILL CURSE YOUR BLOODLINE 🤬");
    setRage(rage + 1);
    if (hearts > 0) setHearts(hearts - 1);
  };

  return (
    <div className="missions-page">
      <div className="mission-card">
        {/* HEADER */}
        <div className="header-section">
          <h1>😈 GNOME MISSIONS</h1>
          <p className="subtitle">Complete missions to earn rare loot.</p>
          <div className="mission-box">
            <p className="mission-label" style={{color: '#888', fontSize: '12px', letterSpacing: '1px'}}>CURRENT OBJECTIVE</p>
            <h2>{mission}</h2>
          </div>
        </div>

        {/* GNOME IMAGE AREA */}
        <div className="gnome-wrapper">
          <img
            src={gnomeMood === "happy" ? happyGnome : gnomeMood === "laugh" ? laughGnome : angryGnome}
            alt="Interactive Gnome"
            className="mission-gnome"
          />
        </div>

        {/* INTERACTION AREA */}
        <div className="interaction-zone">
          <div className="message-box">{message}</div>

          <div className="stats-container">
            <div className="stat-card">
              <h3>Friendship</h3>
              <p>{hearts}/5</p>
            </div>
            <div className="stat-card">
              <h3>Gnome Rage</h3>
              <p>{rage}</p>
            </div>
            <div className="stat-card">
              <h3>Balance</h3>
              <p>🪙 {coins.toLocaleString()}</p>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-top">
              <span>Mission Progress</span>
              <span>{progress}/3</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(progress / 3) * 100}%` }}></div>
            </div>
          </div>

          <div className="buttons">
            <button className="feed-btn" onClick={feedGnome}>🍔 FEED</button>
            <button className="tickle-btn" onClick={tickleGnome}>😂 TICKLE</button>
            <button className="slap-btn" onClick={slapGnome}>👋 SLAP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionsPage;