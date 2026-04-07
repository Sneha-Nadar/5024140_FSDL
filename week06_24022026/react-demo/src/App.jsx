import React, { useState } from "react";

import Navbar from "./components/Navbar";
import MoodSelector from "./components/moodselector";
import MoodCard from "./components/moodcard";
import MoodHistory from "./components/moodhistory";
import Footer from "./components/footer";

function App() {

  const [username, setUsername] = useState("");
  const [mood, setMood] = useState("😊");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const updateMood = (newMood) => {

    const today = new Date().toLocaleDateString();

    setMood(newMood);

    setHistory([...history,{mood:newMood,date:today}]);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <Navbar />

      {/* Name Input */}
      <div className="name-box">

        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

      </div>

      {/* Greeting */}
      {username && <h2>Hello {username} 👋</h2>}

      {/* Theme Toggle */}
      <button
      className="theme-btn"
      onClick={()=>setDarkMode(!darkMode)}
      >
      Toggle Theme
      </button>

      <MoodSelector setMood={updateMood} />

      <MoodCard mood={mood} />

      <MoodHistory history={history} />

      <Footer />

    </div>
  );
}

export default App;