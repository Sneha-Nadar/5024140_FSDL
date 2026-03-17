import React, { useState } from "react";

import Navbar from "./components/Navbar";
import MoodSelector from "./components/moodselector";
import MoodCard from "./components/moodcard";
import MoodHistory from "./components/moodhistory";
import Footer from "./components/footer";

function App() {

  const [mood, setMood] = useState("😊");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const updateMood = (newMood) => {
    setMood(newMood);
    setHistory([...history, newMood]);
  };

  return (
    <div className="app">

      <Navbar />

      <MoodSelector setMood={updateMood} />

      <MoodCard mood={mood} />

      <MoodHistory history={history} />

      <Footer />
      <div className={darkMode ? "app dark" : "app light"}></div>

    </div>
  );
}

export default App;