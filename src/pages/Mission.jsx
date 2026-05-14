import "./mission.css";

import { useState } from "react";

import happyGnome from "../assets/happygnome.png";
import laughGnome from "../assets/laughgnome.png";
import angryGnome from "../assets/angrygnome.png";

function MissionsPage({
  coins,
  setCoins,
}) {

  const [gnomeMood, setGnomeMood] =
    useState("happy");

  const [message, setMessage] =
    useState(
      "GNOME: Feed me human..."
    );

  const [hearts, setHearts] =
    useState(3);

  const [rage, setRage] =
    useState(0);

  const [mission, setMission] =
    useState(
      "Make the gnome laugh 3 times"
    );

  const [progress, setProgress] =
    useState(0);

  const [completed, setCompleted] =
    useState(false);

  // FEED
  const feedGnome = () => {

    setGnomeMood("happy");

    setMessage(
      "GNOME: YOU ARE A BEAUTIFUL CREATURE ❤️"
    );

    setCoins(coins + 100);

    if (hearts < 5) {
      setHearts(hearts + 1);
    }
  };

  // TICKLE
  const tickleGnome = () => {

    setGnomeMood("laugh");

    setMessage(
      "GNOME: HAHAHA STOP IT 😂"
    );

    setCoins(coins + 50);

    const newProgress =
      progress + 1;

    setProgress(newProgress);

    if (
      newProgress >= 3 &&
      !completed
    ) {

      setCompleted(true);

      setCoins(coins + 500);

      setMission(
        "MISSION COMPLETE 🎉"
      );

      setMessage(
        "GNOME: YOU DID IT HUMAN 😂"
      );
    }
  };

  // SLAP
  const slapGnome = () => {

    setGnomeMood("angry");

    setMessage(
      "GNOME: I WILL CURSE YOUR BLOODLINE 🤬"
    );

    setRage(rage + 1);

    if (hearts > 0) {
      setHearts(hearts - 1);
    }
  };

  return (
    <div className="missions-page">

      <div className="mission-card">

        {/* TITLE */}

        <h1>
          😈 GNOME MISSIONS
        </h1>

        <p className="subtitle">
          Complete funny missions and
          interact with the gnome.
        </p>

        {/* MISSION */}

        <div className="mission-box">

          <p className="mission-label">
            CURRENT MISSION
          </p>

          <h2>
            {mission}
          </h2>

        </div>

        {/* GNOME */}

        <div className="gnome-wrapper">

          <img
            src={
              gnomeMood === "happy"
                ? happyGnome
                : gnomeMood === "laugh"
                ? laughGnome
                : angryGnome
            }
            alt=""
            className="mission-gnome"
          />

        </div>

        {/* MESSAGE */}

        <div className="message-box">
          {message}
        </div>

        {/* STATS */}

        <div className="stats-container">

          <div className="stat-card">

            <h3>❤️ FRIENDSHIP</h3>

            <p>{hearts}/5</p>

          </div>

          <div className="stat-card">

            <h3>😡 RAGE</h3>

            <p>{rage}</p>

          </div>

          <div className="stat-card">

            <h3>🪙 COINS</h3>

            <p>{coins}</p>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="progress-section">

          <div className="progress-top">

            <span>
              Mission Progress
            </span>

            <span>
              {progress}/3
            </span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${progress * 33.33}%`,
              }}
            ></div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="buttons">

          <button
            className="feed-btn"
            onClick={feedGnome}
          >
            🍔 FEED
          </button>

          <button
            className="tickle-btn"
            onClick={tickleGnome}
          >
            😂 TICKLE
          </button>

          <button
            className="slap-btn"
            onClick={slapGnome}
          >
            👋 SLAP
          </button>

        </div>

      </div>

    </div>
  );
}

export default MissionsPage;