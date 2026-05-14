import "./leaderboardPage.css";

import gnome from "../../assets/happygnome.png";

function LeaderboardPage({ coins }) {
  const players = [
    { name: "NoobSlayer99", score: 12500 },
    { name: "PotionKing", score: 11800 },
    { name: "MemeLord", score: 11200 },
    { name: "BugHunter", score: 9800 },
    { name: "SleepDeprivedDev", score: 8700 },
    { name: "RandomGamer", score: 7600 },
  ];

  return (
    <div className="leaderboard-page">

      {/* GNOME BANNER */}
      <div className="gnome-banner">

        <img src={gnome} className="leader-gnome" alt="" />

        <div className="gnome-speech">
          "I WILL ALWAYS STAY ON TOP 😈  
          YOU SHOULD JUST GIVE UP"
        </div>

      </div>

      {/* TITLE */}
      <h1 className="leader-title">
        🏆 GNOME LEADERBOARD
      </h1>

      {/* PLAYER LIST */}
      <div className="leaderboard-card">

        {/* GNOME ALWAYS #1 */}
        <div className="row gnome-row">
          <span>🥇 1. GNOME</span>
          <span>{coins + 9999} pts</span>
        </div>

        {players.map((p, index) => (
          <div key={index} className="row">
            <span>
              {index + 2}. {p.name}
            </span>
            <span>{p.score} pts</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default LeaderboardPage;