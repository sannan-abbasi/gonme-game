import "./games.css";
import { useState } from "react";

import happyGnome from "../../assets/happygnome.png";
import angryGnome from "../../assets/angrygnome.png";
import sadGnome from "../../assets/sadgnome.png";

function GamesPage({ coins, setCoins }) {
const questions = [
  {
    q: "When did the gnome last take a shower?",
    options: ["Yesterday", "Never", "He bathes in chaos"],
    answer: 2,
  },
  {
    q: "What does the gnome use as a pillow?",
    options: ["Cloud", "Rock", "Your regrets"],
    answer: 2,
  },
  {
    q: "What is the gnome’s favorite snack?",
    options: ["Pizza", "Mushrooms", "Electric cables"],
    answer: 1,
  },
  {
    q: "Where does the gnome live?",
    options: ["Under your bed", "In the forest", "Inside your WiFi router"],
    answer: 2,
  },
  {
    q: "What happens when gnome gets angry?",
    options: ["He cries", "He deletes reality", "He sleeps"],
    answer: 1,
  },
  {
    q: "What is gnome’s favorite hobby?",
    options: ["Tax fraud", "Causing chaos", "Meditation"],
    answer: 1,
  },
  {
    q: "How does gnome communicate?",
    options: ["Text messages", "Telepathy", "Confusing screams"],
    answer: 2,
  },
  {
    q: "What is gnome’s biggest fear?",
    options: ["Water", "Responsibility", "Being normal"],
    answer: 2,
  },
  {
    q: "What does gnome do at night?",
    options: ["Sleeps peacefully", "Steals socks", "Writes poetry about chaos"],
    answer: 1,
  },
  {
    q: "What is gnome’s life goal?",
    options: ["Become president", "Destroy boredom", "Open a bakery"],
    answer: 1,
  },
];

  const [index, setIndex] = useState(0);
  const [gnomeMood, setGnomeMood] = useState("happy");
  const [message, setMessage] = useState("Answer carefully... the gnome is watching");

  const [score, setScore] = useState(0);

  const current = questions[index];

  const handleAnswer = (i) => {

    if (i === current.answer) {
      setGnomeMood("happy");
      setMessage("GNOME: Correct... you understand me");
      setCoins((p) => p + 50);
      setScore((p) => p + 1);
    }

    else if (Math.abs(i - current.answer) === 1) {
      setGnomeMood("sad");
      setMessage("GNOME: close... but not perfect");
      setCoins((p) => p + 10);
    }

    else {
      setGnomeMood("angry");
      setMessage("GNOME: WRONG. I AM DISAPPOINTED");
      setCoins((p) => p - 20);
    }

    setTimeout(() => {
      setIndex((p) =>
        p + 1 < questions.length ? p + 1 : 0
      );
    }, 1000);
  };

  return (
    <div className="games-page">

      <h1 className="title">GNOME TRUTH TEST</h1>

      {/* GNOME DISPLAY */}
      <div className="gnome-section">

        <img
          src={
            gnomeMood === "happy"
              ? happyGnome
              : gnomeMood === "sad"
              ? sadGnome
              : angryGnome
          }
          className="gnome-img"
          alt="gnome"
        />

        <div className="message-box">
          {message}
        </div>

        <div className="stats">
          <p>Coins: {coins}</p>
          <p>Score: {score}/10</p>
        </div>

      </div>

      {/* QUESTION CARD */}
      <div className="game-card question-card">

        <h2>{current.q}</h2>

        <div className="btn-row">

          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
            >
              {opt}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default GamesPage;