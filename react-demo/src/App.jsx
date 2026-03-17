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

  
  const updateMood = (newMood)=>{

   const today = new Date().toLocaleDateString()

   setMood(newMood)

   setHistory([...history,{mood:newMood,date:today}])

   };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <Navbar />

      {/* Theme Toggle Button */}
      <button 
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
       TELL ME HOW YOU FEEL
      </button>

      <MoodSelector setMood={updateMood} />

      <MoodCard mood={mood} />

      <MoodHistory history={history} />

      <Footer />

    </div>
  );
}

export default App;